import Axios from 'axios'
import Config from '../config.js'

/**
 *
 * @param {string} endpoint       endpoint
 * @param {object} options        options = {query: 'string'}
 * @param {string} options.query  options = {query: 'string'}
 * @returns {object}              response api data
 */
async function apiCall (endpoint, options = {}) {
  const _client = Axios.create({ baseURL: Config.baseUrl })

  options.method = 'POST'
  options.headers = { 'content-type': 'application/x-www-form-urlencoded' }
  options.data = options.query

  const request = await _client.request({ url: endpoint, ...options })

  return request.data
}

/**
 *
 * @param {string} endpoint       endpoint
 * @param {object} options        options = {query: 'string'}
 * @param {string} options.query  query: 'string'
 * @returns {object}              response api data
 */
async function apiCallOtp (endpoint, options = {}) {
  const _client = Axios.create({ baseURL: Config.otpBaseUrl })

  options.method = 'POST'
  options.headers = { 'content-type': 'application/x-www-form-urlencoded' }
  options.data = options.query

  const request = await _client.request({ url: endpoint, ...options })

  return request.data
}

export {
  apiCall,
  apiCallOtp
}
