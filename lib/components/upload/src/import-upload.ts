import { buildProps, definePropType } from '../../../utils/vue/props/runtime';
import { ExtractPropTypes } from "vue";
import { Data, Fields, Tips } from "../../home/src/import-view";
import type ImportUpload from './import-upload.vue'

export const importUploadProps = buildProps({
    sheetName: {
        type: String
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
    upload: (columns: string[], data: Data, fileName: string, fields: Fields) => { }
}
export type ImportUploadInstance = InstanceType<typeof ImportUpload>
