import Taro from "@tarojs/taro";



let host = "http://192.168.100.62:8082"

export interface Result<T> {
  data: T | undefined,
  state: number,
  message: string,
  success: boolean
}


export interface Options {
  pageModel?: PageModel,
  data?: Record<string, any>
  method?: HttpMethod
}

export enum HttpMethod {
  get, post
}

export interface PageModel {
  page: number,
  pageSize: number
}

export interface BaseApi<T> {

  request: (options: Options) => Promise<Result<T>>

}

export abstract class BaseApiImpl<T> implements BaseApi<T> {


  async request(options: Options = {}): Promise<Result<T>> {
    let method: "GET" | "POST" | "OPTIONS" | "HEAD" | "PUT" | "PATCH" | "DELETE" | "TRACE" | "CONNECT" | undefined = "GET"
    switch (options.method) {
      case HttpMethod.post:
        method = "POST"
        break
    }
    try {
      let data = options.data
      let res = await Taro.request<Result<T>>({
        url: host + this.apiUrl,
        method: method,
        data: {...data, ...options.pageModel},
        fail: (r)=>{
          console.log(r)
        }
      });
      return res.data
    }catch (e) {
      console.log(e)
      return {data: undefined, message: e, state: -1, success: false};
    }

  }

  abstract apiUrl: string

}
