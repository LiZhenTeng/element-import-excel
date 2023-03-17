import { allTrim } from './allTrim'
import { utils, read } from 'xlsx';
import type { WorkSheet } from 'xlsx';
import { Data, ExcelData } from '../typings';

const getHeaderRow = (sheet: WorkSheet) => {
    const headers: Array<string> = []
    if (!sheet['!ref']) throw Error("标题获取失败")
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

const getExcelData = (excelData: ExcelData) => {
    const workbook = read(excelData, { type: 'array', cellDates: true, cellText: false })
    const firstSheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[firstSheetName]
    if (!worksheet) {
        return null;
    }
    const columns = getHeaderRow(worksheet)
    const tableData = utils.sheet_to_json<any>(worksheet, {
        defval: null,
        raw: false,
        dateNF: 'yyyy-MM-dd',
    });
    return {
        columns: allTrim(columns, true) as Array<string>,
        tableData: allTrim(tableData, true) as Array<Data>
    }
}

export const excel = (file: File): Promise<{ columns: Array<string>, tableData: Array<Data> } | null> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onerror = e => {
            reject(e)
        }
        reader.onload = e => {
            const excelData = e.target?.result
            const arrData = getExcelData(excelData)
            resolve(arrData)
        }
    })
}
