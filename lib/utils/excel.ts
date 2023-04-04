import { utils, read, WorkBook } from 'xlsx';
import type { WorkSheet } from 'xlsx';
import { ElMessage, ElNotification } from 'element-plus';
import type { Data, Fields } from '@/components';
export namespace XLSX {
    export type SheetName = string
    export type ExcelData = Record<string, Array<any> | Record<string, Array<any>>>
}
export namespace FileReader {
    export type result = string | ArrayBuffer | null | undefined
}

const readHeaderRow = (sheet: WorkSheet) => {
    const headers: Array<string> = []
    if (!sheet['!ref']) throw Error("Title acquisition failed")
    const range = utils.decode_range(sheet['!ref'])
    let C: number
    const R = range.s.r
    for (C = range.s.c; C <= range.e.c; ++C) {
        var cell = sheet[utils.encode_cell({ c: C, r: R })]
        var hdr = 'UNKNOWN ' + C
        if (cell && cell.t) hdr = utils.format_cell(cell)
        headers.push(hdr)
    }
    return headers
}

const readSheets = (excelData: FileReader.result, sheetName?: XLSX.SheetName) => {
    const workbook = read(excelData, { type: 'array', cellDates: true, cellText: false });
    const worksheetNames = workbook.SheetNames;
    if (!sheetName) {
        const firstSheetName = workbook.SheetNames[0]
        return transforms(workbook, firstSheetName)
    } else {
        if (!worksheetNames.includes(sheetName)) {
            ElMessage.error('Not Found Sheet Name');
            throw Error('Not Found Sheet Name')
        } else {
            return transforms(workbook, sheetName)
        }
    }
}

const transforms = (workbook: WorkBook, sheetName: string) => {
    const worksheet = workbook.Sheets[sheetName]
    const columns = readHeaderRow(worksheet)
    const tableData = utils.sheet_to_json<any>(worksheet, {
        defval: null,
        raw: false,
        dateNF: 'yyyy-MM-dd',
    }).map((x, i) => ({ ...x, key: i + 1 }));
    const result: XLSX.ExcelData = {
        columns: columns,
        tableData: tableData
    }
    return result
}

export const readExcel = (file: File, sheetName?: XLSX.SheetName): Promise<XLSX.ExcelData> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onerror = e => {
            reject(e)
        }
        reader.onload = e => {
            const excelData = e.target?.result
            const data = readSheets(excelData, sheetName)
            resolve(data)
        }
    })
}

export const checkType = (file: File) => {
    const fileExt = file.name.split(".").pop()?.toLocaleLowerCase();
    const extArr = ["xlsx", "xls", "csv"];
    if (!fileExt) throw new Error("Unresolved file suffix")
    return extArr.includes(fileExt);
}


export const checkTableTitle = (columns: Array<string>, fields: Fields) => {
    const titles = Object.values(fields);
    let isVaild = true;
    titles.forEach((item) => {
        if (!columns.includes(item)) {
            isVaild = false;
            ElNotification.error({ title: 'Data error', message: item + 'column not found' })
        }
    });
    return isVaild;
}

export const changeDatakeyAndFilter = (data: Data, fields: Fields): Data =>
    data.reduce<Data>((p, c, i) => {
        p.push({
            ...Object.keys(fields).reduce((pre, cur) => {
                Object.defineProperty(pre, cur, { value: c[fields[cur]], configurable: true, enumerable: true })
                return pre
            }, {}), key: i + 1
        })
        return p
    }, []);
