import { buildProps, definePropType } from '../../../utils/vue/props/runtime';
import type { Rules } from 'async-validator'
import { AppendData, Data, Fields, ReadSuccessFn } from "../../home/src/import-view";
import { ExtractPropTypes } from "vue";
import type ImportData from './import-data.vue'

export type ErrorData = Record<string, any>

export const importDataProps = buildProps({
    canNext: {
        type: Boolean,
        default: true
    },
    rules: {
        type: definePropType<Rules>(Object)
    },
    fields: {
        type: definePropType<Fields>(Object),
        required: true
    },
    readSuccess: {
        type: definePropType<ReadSuccessFn>(Function)
    },
    tableData: {
        type: definePropType<Data>(Array),
        default:[]
    },
    formatter: {
        type: Function
    },
    append: {
        type: definePropType<AppendData>(Object)
    },
    /**
    * @description table scroll
    */
    scroll: {
        type: Number,
        default: 1500,
    },

} as const)

export type ImportDataProps = ExtractPropTypes<typeof importDataProps>

export const importDataEmits = {
    pre: () => { }
}
export type ImportDataInstance = InstanceType<typeof ImportData>
