import {red, dim} from 'colorette'

export function handlError(error: any) {
  if (error.frame) {
    console.error(red(`Error parsing: ${error.loc.file}:${error.loc.line}:${error.loc.column}`))
    console.error(dim(error.frame))
  } else {
    console.error(red(error.stack))
  }
  process.exitCode = 1
}