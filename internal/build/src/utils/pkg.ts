import { buildConfig } from '../build-info'

import type { Module } from '../build-info'

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`@element-import-excel/theme-chalk`, `element-import-excel/theme-chalk`)
    id = id.replaceAll(`@element-import-excel/`, `${config.bundle.path}/`)
    return id
  }
}
