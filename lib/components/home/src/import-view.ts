import { Rules } from "async-validator";
import { buildProps, definePropType } from "element-plus/lib/utils/vue/props/runtime";
import { ExtractPropTypes } from "vue";
import type ImportView from './import-view.vue'

type Tip = string;
type Column = Record<string, string>;

export type Tips = Array<Tip>;
export type Columns = Array<Column>;
export type Data = Array<Record<string, any>>;
export type AppendData = Record<string, any>;
export type Fields = Record<string, string>
export type ReadSuccessFn = (data: Data) => Promise<any>
export type ReturnFileNameFn = (fileName: string) => void

export const importViewProps = buildProps({
    /**
     * @description table scroll
     */
    scroll: {
        type: Number,
        default: 1500,
    },
    /**
     * @description download template file path
     */
    filePath: {
        type: String,
        default: '',
    },
    readSuccess: {
        type: definePropType<ReadSuccessFn>(Function)
    },
    returnFileName: {
        type: definePropType<ReturnFileNameFn>(Function)
    },
    fields: {
        type: definePropType<Fields>(Object),
        required: true
    },
    visible: {
        type: Boolean,
        default: false,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    append: {
        type: definePropType<AppendData>(Object)
    },
    tips: {
        type: definePropType<Tips>(Array)
    },
    rules: {
        type: definePropType<Rules>(Object)
    },
    formatter: {
        type: Function
    },
    dialogWidth: {
        type: String,
        default: '80%'
    },
    showFinishResult: {
        type: Boolean,
        default: false
    },
    finishDataColumns: {
        type: definePropType<Columns>(Array)
    },
    finishDataSource: {
        type: definePropType<Data>(Array),
        default: []
    }
} as const)

export type ImportViewProps = ExtractPropTypes<typeof importViewProps>

export const importViewEmits = {
    close: (): void => { },
    finish: (): void => { }
}
export type ImportViewInstance = InstanceType<typeof ImportView>
