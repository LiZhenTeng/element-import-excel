import { series } from 'gulp'
import { generateTypesDefinitions } from './src'

export default series(generateTypesDefinitions)