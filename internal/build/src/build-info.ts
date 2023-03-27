import path, { resolve } from 'path'
export const PKG_NAME = 'element-import-excel'

export const projRoot = resolve(__dirname, '..', '..', '..')

export const buildOutput = resolve(projRoot, 'dist')
export const epOutput = resolve(buildOutput, 'element-import-excel')
export const pkgRoot = resolve(projRoot, 'packages')
export const epRoot = resolve(pkgRoot, 'element-import-excel')

import type { ModuleFormat } from 'rollup'

export const modules = ['esm', 'cjs'] as const
export type Module = typeof modules[number]
export interface BuildInfo {
    module: 'ESNext' | 'CommonJS'
    format: ModuleFormat
    ext: 'mjs' | 'cjs' | 'js'
    output: {
        /** e.g: `es` */
        name: string
        /** e.g: `dist/element-import-excel/es` */
        path: string
    }

    bundle: {
        /** e.g: `element-import-excel/es` */
        path: string
    }
}

export const buildConfig: Record<Module, BuildInfo> = {
    esm: {
        module: 'ESNext',
        format: 'esm',
        ext: 'mjs',
        output: {
            name: 'es',
            path: path.resolve(epOutput, 'es'),
        },
        bundle: {
            path: `${PKG_NAME}/es`,
        },
    },
    cjs: {
        module: 'CommonJS',
        format: 'cjs',
        ext: 'js',
        output: {
            name: 'lib',
            path: path.resolve(epOutput, 'lib'),
        },
        bundle: {
            path: `${PKG_NAME}/lib`,
        },
    },
}
export const buildConfigEntries = Object.entries(
    buildConfig
) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
export type BuildConfigEntries = [Module, BuildInfo][]

export const target = 'es2018'
