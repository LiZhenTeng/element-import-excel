import { ElNotification } from "element-plus";
import { Data, Fields } from "../typings";

export const checkType = (file: File) => {
    const fileExt = file.name.split(".").pop()?.toLocaleLowerCase();
    const extArr = ["xlsx", "xls", "csv"];
    if (!fileExt) throw new Error("未解析文件后缀")
    return extArr.includes(fileExt);
}
export const checkTableTitle = (columns: Array<string>, fields: Fields) => {
    const titles = Object.values(fields);
    let isVaild = true;
    titles.forEach((item) => {
        if (!columns.includes(item)) {
            isVaild = false;
            ElNotification.error({ title: '数据出错了', message: item + '列未找到' })
        }
    });
    return isVaild;
}

export const changeDatakeyAndFilter = (data: Array<Data>, fields: Fields) => {
    return data.map(item => {
        var d: Data = {};
        Object.keys(fields).forEach(key => {
            d[key] = item[fields[key]];
        })
        return d;
    });
}
export const ArrayToObj = (arr: Array<string>) => {
    var result: Data = {};
    arr.forEach((item: string) => {
        let key = item;
        let value = item;
        result[key] = value;
    });
    return result;
}