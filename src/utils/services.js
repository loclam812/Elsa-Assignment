import axios from 'axios'

const DEFAULT_HEADERS = {
  'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
  'x-rapidapi-key': '7ec0ea8ddbmsh71d8a54c6282bccp1a57d9jsn7572c8775df5'
}

export const getService = (url = '', params = {}, headers = {}, options = {}) => {
  return axios.get(url, {
    ...options,
    params,
    headers: {
      ...DEFAULT_HEADERS,
      headers
    }
  })
    .then(({ status, data }) => {
      return {
        status,
        data
      }
    })
    .catch(error => {
      if (!error) {
        return {
          status: '504',
          error: {
            message: 'Request Timeout'
          }
        }
      }

      const { status, data } = error.response

      return {
        error: {
          status,
          data
        }
      }
    })
}
