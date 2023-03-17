export interface RequestFn {
    (data: Array<any>): Promise<any>
}

export interface ReturnFileName {
    (fileName: string): void
}
export interface Data {
    [key: string]: any
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
export type ExcelData = string | ArrayBuffer | null | undefined