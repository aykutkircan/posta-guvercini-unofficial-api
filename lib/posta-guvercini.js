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
   * @returns {any}                                   Returns message id as array
   */
  async sendSimpleSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    return _sendSimpleSmsRequest(parameters)
  }

  /**
   * @param {object} parameters                       Parameters that users can specify.
   * @param {Array.<string>} parameters.phones        Phone numbers.
   * @param {string} parameters.text                  Text message
   * @returns {any}                                   Returns message ids as array
   */
  async sendBulkSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    return _sendBulkSmsRequest(parameters)
  }

  /**
   * @param {object} parameters                       Parameters that users can specify.
   * @param {Array.<string>} parameters.phones        Phone numbers.
   * @param {string} parameters.text                  Text message
   * @returns {any}                                   Returns message id as array
   */
  async sendOtpSms ({ phones, text }) {
    const parameters = {
      user: this.user,
      password: this.password,
      gsm: phones,
      text: text
    }

    return _sendOtpSmsRequest(parameters)
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

    return _getSmsLogRequest(parameters)
  }
}

export default PostaGuvercini
