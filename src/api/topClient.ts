import type { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios'
import FormData from 'form-data'
import { YYYYMMDDHHmmss, isObject, md5 } from '../utils/topUtil'
import { initAxios } from '../utils/request'

interface TopClientOptions extends AxiosRequestConfig {
  appkey: string
  appsecret: string
}

interface RequestParams {
  [key: string]: any
  /**
   * 接口名，如 taobao.tbk.item.info.get
   */
  method: string
  /**
   * AppKey，如 12345678
   */
  app_key: string
  /**
   * [用户授权信息](https://open.taobao.com/doc.htm?docId=102635&docType=1)
   * 若接口**需授权**，需填此项
   */
  session?: string
  /**
   * 时间戳。格式为 `yyyy-MM-dd HH:mm:ss`，时区为 `GMT+8`
   *
   * 例如：2022-08-22 18:43:00。误差最多 10 分钟
   */
  timestamp: string
  /**
   * 接口协议版本。可选值：`2.0`
   */
  v: string
  /**
   * 签名算法，可选值：`hmac` `md5` `hmac-sha256`
   */
  sign_method: string
  /**
   * [签名](https://open.taobao.com/doc.htm?docId=101617&docType=1)
   */
  sign: string
  /**
   * 响应格式。默认 `xml`，可选值：`xml` `json`
   */
  format?: string
  /**
   * 是否精简 JSON。`format` = `json` 时有效。默认 `false`
   */
  simplify?: boolean
}

/**
 * 淘宝开发平台
 */
export class TopClient {
  appKey: string
  appSecret: string
  axios: AxiosInstance

  constructor(options: TopClientOptions) {
    this.appKey = options.appkey
    this.appSecret = options.appsecret

    this.axios = initAxios({
      baseURL: options.baseURL,
    })
  }

  private invoke(type: Method, method: string, params: RequestParams, httpHeaders?: AxiosRequestHeaders) {
    params.method = method
    return this.request(type, params, httpHeaders || {})
  }

  /**
   * Request API.
   */
  private request(type: Method, params: any, _httpHeaders: AxiosRequestHeaders) {
    // @ts-expect-error 紧接着赋值
    const args: RequestParams = {
      timestamp: this.timestamp(),
      format: 'json',
      app_key: this.appKey,
      v: '2.0',
      sign_method: 'md5',
    }

    for (const key in params) {
      if (isObject(params[key]))
        args[key] = JSON.stringify(params[key])
      else
        args[key] = params[key]
    }
    args.sign = this.sign(args)

    const form = new FormData()
    Object.keys(args).forEach(key => form.append(key, args[key]))

    if (type === 'get') { return this.axios.get('') }
    else {
      return this.axios.post('', form, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${form.getBoundary()}`,
        },
      })
    }
  }

  /**
   * POST
   */
  execute(api: string, params: any) {
    return this.invoke('post', api, params)
  }

  /**
   * POST，带头
   */
  executeWithHeader(api: string, params: any, httpHeaders: AxiosRequestHeaders) {
    return this.invoke('post', api, params, httpHeaders || {})
  }

  /**
   * GET
   */
  get(api: string, params: any) {
    return this.invoke('get', api, params)
  }

  /**
   * 获得时间戳，格式为 'yyyy-MM-dd HH:mm:ss'
   */
  private timestamp(): string {
    return YYYYMMDDHHmmss()
  }

  /**
   * 签名
   * 参见 https://open.taobao.com/docV3.htm?spm=a219a.15212433.0.0.2619669aIW2hfl&docId=101617&docType=1#s3
   */
  private sign(params: RequestParams) {
    const sorted = Object.keys(params).sort()
    let baseString = this.appSecret
    for (let i = 0, l = sorted.length; i < l; i++) {
      const k = sorted[i]
      baseString += k + params[k]
    }
    baseString += this.appSecret
    return md5(baseString).toUpperCase()
  }
}
