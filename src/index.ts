import * as path from 'path'
import generate from './generator'

export enum E { A = 'a' }

export interface Options {
  output?: string
}

export default async function main(entry: string, _e: E, options: Options): Promise<void> {
  const { output = `./cli.ts` } = options
  const entryPath = path.isAbsolute(entry) ? entry : path.resolve(entry)
  const outPath = path.isAbsolute(output) 
    ? output
    : path.resolve(path.dirname(entryPath), output)
  generate(outPath, entryPath)
}

export { default as resolve, COMMAND_JSDOC_TAG } from './resolver'
export { transformCommand, transformOption, COMMAND_OPTIONS_PARAMETER_REGEXP } from './transformer'
export { default as render } from './render'
export { default as generate } from './generator'
export { default as emit, EmitOptions, DEFAULT_EMITOPTIONS } from './emitter'
