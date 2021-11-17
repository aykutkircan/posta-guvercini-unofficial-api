import { constructorOpionsValidation } from './option-validation.js'
import {
  _sendSimpleSmsRequest,
  _sendBulkSmsRequest,
  _sendOtpSmsRequest,
  _getSmsLogRequest
} from './posta-guvercini-requests.js'

class PostaGuvercini {
  /**
   * @param {object} options                         Options that users can specify
   * @param {string} options.user                    Username
   * @param {string} options.password                Password
   */
  constructor (options) {
    const { error, value: optionsWithDefault } = constructorOpionsValidation.validate(options)

    if (error) {
      throw (error.message)
    }

    this.user = optionsWithDefault.user
    this.password = optionsWithDefault.password
  }

  /**
   * @param {object} parameters                       Parameters that users can specify.
   * @param {Array.<string>} parameters.phones        Phone numbers
   * @param {string} parameters.text                  Text message
   * @returns {any}                                   Returns only a message_id
   */
  async sendSimpleSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    const response = await _sendSimpleSmsRequest(parameters)
    return response
  }

  /**
   * @param {object} parameters                       Parameters that users can specify.
   * @param {Array.<string>} parameters.phones        Phone numbers.
   * @param {string} parameters.text                  Text message
   * @returns {any}                                   Returns message_ids
   */
  async sendBulkSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    const response = await _sendBulkSmsRequest(parameters)
    return response
  }

  /**
   * @param {object} parameters                       Parameters that users can specify.
   * @param {Array.<string>} parameters.phones        Phone numbers.
   * @param {string} parameters.text                  Text message
   * @returns {any}                                   Returns only a message_id
   */
  async sendOtpSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    const response = await _sendOtpSmsRequest(parameters)
    return response
  }

  /**
   * @param {string} messageId                        MessageId
   * @returns {any}                                   Returns sms log by message_id
   */
  async getSmsLog (messageId) {
    const parameters = {
      user: this.user,
      password: this.password,
      message_id: messageId
    }

    const response = await _getSmsLogRequest(parameters)
    return response
  }
}

export {
  PostaGuvercini
}
