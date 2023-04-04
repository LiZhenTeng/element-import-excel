import { buildProps, definePropType } from '../../../utils/vue/props/runtime';
import { ExtractPropTypes } from "vue";
import { Data, Fields, Tips } from "../../home/src/import-view";
import type ImportUpload from './import-upload.vue'
import type {XLSX} from '@/utils'

export const importUploadProps = buildProps({
    sheetName: {
        type: definePropType<XLSX.SheetName>(String)
    },
    tips: {
        type: definePropType<Tips>(Array),
        default: []
    },
    fields: {
        type: definePropType<Fields>(Object),
        required: true
    }
} as const)

export type ImportUploadProps = ExtractPropTypes<typeof importUploadProps>

export const importUploadEmits = {
    upload: (columns: string[], data: Data, fileName: string) => { }
}
export type ImportUploadInstance = InstanceType<typeof ImportUpload>
