import Qs from 'node:querystring'
import Axios from 'axios'
import _ from 'lodash'
import Config from '../config.js'

/**
  * @param {
  *   {
  *     username: 'account-usernmae',
  *     password: 'account-password',
  *     phone: ['no1'],
  *     text: 'Message Text'
  *   }
  * } parametres
  * @returns {'messageId'}
*/
async function _sendSimpleSmsRequest (parametres) {
  const query = Qs.stringify(parametres)

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
  * @param {
  *   {
  *     username: 'account-usernmae',
  *     password: 'account-password',
  *     phone: ['no1', 'no2', 'no3'],
  *     text: 'Message Text'
  *   }
  * } parametres
  * @returns {['messageIds']}
*/
async function _sendBulkSmsRequest (parametres) {
  const query = Qs.stringify(parametres)

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
  * @param {
  *   {
  *     username: 'account-usernmae',
  *     password: 'account-password',
  *     phone: ['no1'],
  *     text: 'OTP Message'
  *   }
  * } parametres
  * @returns {'messageId'}
*/
async function _sendOtpSmsRequest (parametres) {
  const query = Qs.stringify(parametres)

  const { data } = await Axios({
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: `${Config.otpBaseUrl}/sendsms.asp`,
    data: query
  })

  const parsedData = Qs.parse(data)

  if (parsedData.errno === '-1001') {
    throw new Error(parsedData.errtext)
  }

  if (!parsedData.message_id) {
    throw new Error('Response is invalid, message_id is not exist.')
  }

  return parsedData.message_id
}

function getIds (data) {
  return _.isArray(data.message_id) ? data.message_id : [data.message_id]
}

export {
  _sendSimpleSmsRequest,
  _sendBulkSmsRequest,
  _sendOtpSmsRequest
}