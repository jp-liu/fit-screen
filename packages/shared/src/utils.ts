interface ThrottleOptions {
  /**
   * For the first time the trigger
   * @default undefined
   */
  leading?: boolean

  /**
   * After the end of the trigger
   * @default undefined
   */
  trailing?: boolean
}

export function throttle(func: Function, wait: number, options?: ThrottleOptions) {
  let timeout: ReturnType<typeof setTimeout> | null,
    context: any,
    args: Array<any> | null

  let previous = 0
  if (!options)
    options = {}

  const later = function () {
    previous = options?.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout)
      context = args = null
  }

  const throttled = function (this: any, ...rests: any[]) {
    const now = new Date().getTime()

    if (!previous && options?.leading === false)
      previous = now

    const remaining = wait - (now - previous)
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    context = this
    args = rests
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout)
        context = args = null
    }
    else if (!timeout && options?.trailing) {
      timeout = setTimeout(later, remaining)
    }
  }

  return throttled
}

export async function classNamePrefix(prefix: string) {
  if (typeof process === 'undefined' || Object.prototype.toString.call(process) !== '[object process]')
    return

  if (!prefix || typeof prefix !== 'string')
    return

  const { fileURLToPath } = await import('url')
  const { dirname: dirnameFn, resolve } = await import('path')
  const { existsSync, copyFileSync, readFileSync, writeFileSync } = await import('fs')

  const dirname = dirnameFn(fileURLToPath(import.meta.url))
  const stylePath = resolve(dirname, './style.css')
  const originPath = resolve(dirname, './style-origin.css')

  let rPath: string = stylePath
  if (existsSync(originPath))
    rPath = originPath
  else
    copyFileSync(stylePath, originPath)

  const content = readFileSync(rPath, { encoding: 'utf-8' })
  const reg = /fit-screen/g

  const newContent = content.replace(reg, prefix)
  writeFileSync(stylePath, newContent, { encoding: 'utf-8' })
}
