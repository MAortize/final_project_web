export const helpFetch = () => {
    //se dispone una url abierta/ para que en el endpoint llege al json que se necesite
    const URL = "http://localhost:3001/"
  
    const customFetch = async (endpoint, options = {}) => {
      options.method = options.method || "GET"
      options.headers = {
        "content-type": "application/json"
      }
  
      if (options.body) {
        options.body = JSON.stringify(options.body)
      }
      try {
        const response = await fetch(`${URL}${endpoint}`, options)
        return await (response.ok
          ? response.json()
          : Promise.reject({
            error: true,
            status: response.status,
            statusText: response.statusText
          }))
      } catch (error) {
        return {
          error: true,
          statusText: "Error: No se ha logrado la petición."
        }
      }
    }
  
    const get = (endpoint) => customFetch(endpoint)
  
    const post = (endpoint, options) => {
      options.method = "POST"
      return customFetch(endpoint, options)
    }
  
    const put = (endpoint, options, id) => {
      options.method = "PUT"
      return customFetch(`${endpoint}/${id}`, options)
    }
  
    const del = (endpoint, id) => {
      const options = {
        method: "DELETE"
      }
      return customFetch(`${endpoint}/${id}`, options)
    }

    const tab = (endpoint) => {
      const options = {
        method: "GET"
      }
      let pag = "?_page=1&_limit=10"
      return customFetch(`${endpoint}/${pag}`, options)
    }

    const sort = (endpoint,sor) => {
      const options = {
        method: "GET"
      }
      let busca = sor
      let buscador = "?_sort="+busca
      return customFetch(`${endpoint}${buscador}`, options)
    }
  
    return { get, post, put, del, tab , sort }
  }