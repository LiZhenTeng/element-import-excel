import { Rules } from "async-validator";
import { buildProps, definePropType } from '../../../utils/vue/props/runtime';
import { ExtractPropTypes } from "vue";
import type ImportView from './import-view.vue'

export type Type = 'success' | 'warning' | 'error' | 'info';
export type Tip = { title?: string, description: string, type?: Type,closable?:boolean };
export type Column = Record<string, string>;

export type Tips = Array<Tip>;
export type Columns = Array<Column>;
export type Data = Array<Record<string, any>>;
export type Append = Record<string, any>;
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
        type: definePropType<ReadSuccessFn>(Function),
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
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    append: {
        type: definePropType<Append>(Object)
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
    width: {
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
