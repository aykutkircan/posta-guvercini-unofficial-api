import Qs from 'node:querystring'
import Axios from 'axios'
import _ from 'lodash'
import Config from '../config.js'

/**
  * @param {Object} parameters                  Parameters that users can specify
  * @param {String} parameters.user             Username
  * @param {String} parameters.password         Password
  * @param {Array.<String>} parameters.phones   Phones
  * @param {String} parameters.text             Text message
  * @returns {Promise.<Array>}
*/
async function _sendSimpleSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const { data } = await Axios({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${Config.baseUrl}/sendsms.asp`,
    data: query
  })

  const parsedData = Qs.parse(data)

  if (!parsedData.message_id) {
    throw new Error('Response is invalid, message_id is not exist.')
  }

  return parsedData.message_id
}

/**
  * @param {Object} parameters                  Parameters that users can specify
  * @param {String} parameters.user             Username
  * @param {String} parameters.password         Password
  * @param {Array.<String>} parameters.phones   Phones
  * @param {String} parameters.text             Text message
  * @returns {Promise.<Array>}
*/
async function _sendBulkSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const { data } = await Axios({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${Config.baseUrl}/sendbulksms.asp`,
    data: query
  })

  const parsedData = Qs.parse(data)

  const messageIds = getIds(parsedData)

  if (!messageIds || messageIds.length === 0) {
    throw new Error('Response is invalid message_id(s) are not exist.')
  }

  return messageIds
}

/**
  * @param {Object} parameters                  Parameters that users can specify
  * @param {String} parameters.user             Username
  * @param {String} parameters.password         Password
  * @param {Array.<String>} parameters.phones   Phones
  * @param {String} parameters.text             Text message
  * @returns {Promise.<Array>}
*/
async function _sendOtpSmsRequest (parameters) {
  const query = Qs.stringify(parameters)

  const { data } = await Axios({
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${Config.otpBaseUrl}/sendsms.asp`,
    data: query
  })

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
 * @param {Array} data
 * @returns {any}
 */
function getIds (data) {
  return _.isArray(data.message_id) ? data.message_id : [data.message_id]
}

export {
  _sendSimpleSmsRequest,
  _sendBulkSmsRequest,
  _sendOtpSmsRequest
}
