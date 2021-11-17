import { constructorOpionsValidation } from './option-validation.js'
import { _sendSimpleSmsRequest, _sendBulkSmsRequest, _sendOtpSmsRequest } from './posta-guvercini-requests.js'

class PostaGuvercini {
  /**
    * @param {Object} options           Options that users can specify
    * @param {String} options.user      Username
    * @param {String} options.password  Password
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
    * @param {Object} parameters                    Parameters that users can specify.
    * @param {Array.<String>} parameters.phones     Phone numbers.
    * @param {String} parameters.text               Text message
    * @returns
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
    * @param {Object} parameters                        Parameters that users can specify.
    * @param {Array.<String>} parameters.phones         Phone numbers.
    * @param {String} parameters.text                   Text message
    * @returns
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
    * @param {Object} parameters                        Parameters that users can specify.
    * @param {Array.<String>} parameters.phones         Phone numbers.
    * @param {String} parameters.text                   Text message
    * @returns
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
}

export {
  PostaGuvercini
}
