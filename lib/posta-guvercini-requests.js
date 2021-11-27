import Qs from 'node:querystring'
import { apiCall, apiCallOtp } from './request-wrapper.js'
import checkError from './check-error.js'

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns a message id as array
 */
async function _sendSimpleSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCall('/sendsms.asp', { query })

  const parsedData = Qs.parse(data)

  return checkError(parsedData)
}

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns message ids as array
 */
async function _sendBulkSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCall('/sendbulksms.asp', { query })

  const parsedData = Qs.parse(data)

  return checkError(parsedData)
}

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns message id as array
 */
async function _sendOtpSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCallOtp('/sendsms.asp', { query })

  const parsedData = Qs.parse(data)

  return checkError(parsedData)
}

/**
 *
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {string} parameters.messageId        MessageId
 * @returns {any}                              response status message
 */
async function _getSmsLogRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCallOtp('/querysms.asp', { query })

  const parsedData = Qs.parse(data)

  return parsedData
}

export {
  _sendSimpleSmsRequest,
  _sendBulkSmsRequest,
  _sendOtpSmsRequest,
  _getSmsLogRequest
}
