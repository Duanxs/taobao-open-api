import type { BinaryToTextEncoding } from 'crypto'
import crypto from 'crypto'
import os from 'os'

/**
 * hash
 */
export const hash = function hash(method: string, s: string, format?: BinaryToTextEncoding): string {
  const sum = crypto.createHash(method)
  sum.update(s, 'utf8')
  return sum.digest(format || 'hex')
}

/**
 * md5 hash
 */
export const md5 = function md5(s: string, format?: BinaryToTextEncoding): string {
  return hash('md5', s, format)
}

type DateWithZero = number | string

interface DataOptions {
  dateSep: string
  timeSep: string
}

export const YYYYMMDDHHmmss = function (d?: Date | number | string, options?: DataOptions): string {
  d = d || new Date()
  if (!(d instanceof Date))
    d = new Date(d)

  let dateSep = '-'
  let timeSep = ':'
  if (options) {
    if (options.dateSep)
      dateSep = options.dateSep

    if (options.timeSep)
      timeSep = options.timeSep
  }
  let date: DateWithZero = d.getDate()
  if (date < 10)
    date = `0${date}`

  let month: DateWithZero = d.getMonth() + 1
  if (month < 10)
    month = `0${month}`

  let hours: DateWithZero = d.getHours()
  if (hours < 10)
    hours = `0${hours}`

  let mintues: DateWithZero = d.getMinutes()
  if (mintues < 10)
    mintues = `0${mintues}`

  let seconds: DateWithZero = d.getSeconds()
  if (seconds < 10)
    seconds = `0${seconds}`

  return `${d.getFullYear() + dateSep + month + dateSep + date} ${
        hours}${timeSep}${mintues}${timeSep}${seconds}`
}

export const getLocalIPAdress = function () {
  const interfaces = os.networkInterfaces()
  for (const devName in interfaces) {
    const iface = interfaces[devName] || []
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address
    }
  }
}

export const hasOwn = (obj: any, key: PropertyKey) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object'
}

export const isArray = Array.isArray

export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function'
}

export function isString(value: any): boolean {
  return typeof value === 'string'
}

