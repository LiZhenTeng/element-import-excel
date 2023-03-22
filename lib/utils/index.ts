import { ElNotification } from "element-plus";
import { Data, Fields } from "../components/home/src/import-view";

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


export const ArrayToObject = (data: Array<string>) =>
    data.reduce<Record<string, string>>((p, c) => {
        Object.defineProperty(p, c, { value: c, configurable: true, enumerable: true })
        return p;
    }, {})
