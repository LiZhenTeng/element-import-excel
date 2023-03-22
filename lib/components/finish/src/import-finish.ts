import { buildProps, definePropType } from "element-plus/lib/utils/vue/props/runtime";
import { ExtractPropTypes } from "vue";
import { Columns, Data } from "../../home/src/import-view";
import type ImportFinish from './import-finish.vue'

export const importFinishProps = buildProps({
    showFinishResult: {
        type: Boolean,
        default: false
    },
    dataSourceColumns: {
        type: definePropType<Columns>(Array)
    },
    dataSource: {
        type: definePropType<Data>(Array),
        default: []
    }
} as const)

export type ImportFinishProps = ExtractPropTypes<typeof importFinishProps>

export const importFinishEmits = {
    finish: () => { }
}
export type ImportFinishInstance = InstanceType<typeof ImportFinish>
