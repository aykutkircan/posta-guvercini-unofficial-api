import _ from 'lodash'

/**
 * @param {object} parsedData                         parsedData
 * @param {string} parsedData.errno                   errno
 * @param {string} parsedData.errtext                 errtext
 * @param {string} parsedData.message_id              message_id
 * @returns {Array.<string>}                          Returns message id(s)
 */
async function checkError (parsedData) {
  const { errno: errorNo, errtext: errorText, message_id: messageId } = parsedData

  if (errorNo !== '0') {
    throw new Error(`Hata Kodu: ${errorNo}, Hata Mesajı: ${errorText}`)
  }
  if (errorNo === '0' && messageId) {
    return _.isArray(messageId) ? messageId : [messageId]
  }
  throw new Error('Something Went Wrong')
}

export default checkError
