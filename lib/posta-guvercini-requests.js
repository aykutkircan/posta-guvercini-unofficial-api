import Qs from 'node:querystring'
import _ from 'lodash'
import { apiCall, apiCallOtp } from './request-wrapper.js'

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns only a message id
 */
async function _sendSimpleSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCall('/sendsms.asp', { query })

  const parsedData = Qs.parse(data)

  if (!parsedData.message_id) {
    throw new Error('Response is invalid, message_id is not exist.')
  }

  return parsedData.message_id
}

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns only message ids
 */
async function _sendBulkSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCall('/sendbulksms.asp', { query })

  const parsedData = Qs.parse(data)

  const messageIds = getIds(parsedData)

  if (!messageIds || messageIds.length === 0) {
    throw new Error('Response is invalid message_id(s) are not exist.')
  }

  return messageIds
}

/**
 * @param {object} parameters                  Parameters that users can specify
 * @param {string} parameters.user             Username
 * @param {string} parameters.password         Password
 * @param {Array.<string>} parameters.phones   Phones
 * @param {string} parameters.text             Text message
 * @returns {Promise.<Array>}                  Returns only a message id
 */
async function _sendOtpSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const data = await apiCallOtp('/sendsms.asp', { query })

  const parsedData = Qs.parse(data)

  if (parsedData.errno !== '0') {
    throw new Error(parsedData.errtext)
  }

  if (!parsedData.message_id) {
    throw new Error('Response is invalid, message_id is not exist.')
  }

  return parsedData.message_id
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

/**
 * @param {object} data                       include message info
 * @returns {any}                             returns message ids as array
 */
function getIds (data) {
  return _.isArray(data.message_id) ? data.message_id : [data.message_id]
}

export {
  _sendSimpleSmsRequest,
  _sendBulkSmsRequest,
  _sendOtpSmsRequest,
  _getSmsLogRequest
}
