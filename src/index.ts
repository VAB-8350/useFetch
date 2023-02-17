import axios, { AxiosRequestConfig } from 'axios'


export default function useFetch (instanceOptions: AxiosRequestConfig) {

  const api = axios.create(instanceOptions)

  // Default response
  let success: boolean
  let data: object | boolean

  type url = string

  function formatResponse(res: object, status: number) {

    return {
      status,
      data: res
    }
  }

  // HTTP methods (CRUD)
  async function GET (url: url) {

    try {

      const {data: res, status} =  await api.get<object[] | object >(url)
      return formatResponse(res, status)

    } catch (error: any) {

      return formatResponse({error: error.response.statusText}, error.response.status)

    }

  }

  async function POST (url: url, body: object) {

    try {

      const {data: res, status} = await api.post<object[] | object >(url, body)

      return formatResponse(res, status)

    } catch (error: any) {

      return formatResponse({error: error.response.statusText}, error.response.status)

    }

  }

  async function DELETE (url: url, body?: object) {

    try {

      const {data: res, status} = await api.delete<object[] | object >(url, body)

      return formatResponse(res, status)

    } catch (error: any) {

      return formatResponse({error: error.response.statusText}, error.response.status)

    }

  }

  async function PATCH (url: url, body: object) {

    try {

      const {data: res, status} = await api.patch<object[] | object >(url, body)

      return formatResponse(res, status)

    } catch (error: any) {

      return formatResponse({error: error.response.statusText}, error.response.status)

    }

  }

  return { GET, POST, DELETE, PATCH }

}