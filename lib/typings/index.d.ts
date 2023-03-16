import type { Rule } from 'async-validator'
interface RequestFn {
    (data: Array<any>): Promise<any>
}

interface ReturnFileName {
    (fileName: string): void
}

export interface Fields {
    [key: string]: string
}
interface Formatter {
    [key: string]: { [key: string]: Function }
}
export interface Column {
    lable: string,
    prop: string
}



export interface ImportExcelProps {
    scroll?: number
    filePath?: string
    requestFn: RequestFn
    returnFileName?: ReturnFileName
    fields: Fields
    visible?: boolean
    title?: string
    append?: Fields
    tips?: Array<string>
    rules?: Rule
    formatter?: Formatter
    dialogWidth?: string
    showFinishResult?: boolean
    finishDataColumns?: Array<Column>
    finishDataSource?: Array<Fields>
}

export interface ImportUploadProps {
    tips?: Array<string>,
    fields: Fields
}