import { constructorOpionsValidation } from './option-validation.js'
import { _sendSimpleSmsRequest, _sendBulkSmsRequest, _sendOtpSmsRequest } from './posta-guvercini-requests.js'

class PostaGuvercini {
  /**
  * @param {'account-username'} username
  * @param {'account-password'} password
  * @param {'sms-base-url'} baseUrl
  * @param {'otp-base-url'} otpBaseUrl
  */
  constructor (options) {
    const { error, value: optionsWithDefault } = constructorOpionsValidation.validate(options)

    if (error) {
      throw (error.message)
    }

    this.username = optionsWithDefault.username
    this.password = optionsWithDefault.password
  }

  /**
    * @param {['no1']} phone
    * @param {'Text Message'} text
    * @returns
  */
  async sendSimpleSms ({ phone, text }) {
    const parametres = {
      username: this.username,
      password: this.password,
      phone: phone,
      text: text
    }

    const response = await _sendSimpleSmsRequest(parametres)
    return response
  }

  /**
    * @param {['no1', 'no2', 'no3']} phones
    * @param {'Text Message'} text
    * @returns
  */
  async sendBulkSms ({ phones, text }) {
    const parametres = {
      username: this.username,
      password: this.password,
      phone: phones,
      text: text
    }

    const response = await _sendBulkSmsRequest(parametres)
    return response
  }

  /**
    * @param {['no1']} phone
    * @param {'Text Message'} text
    * @returns
  */
  async sendOtpSms ({ phone, text }) {
    const parametres = {
      username: this.username,
      password: this.password,
      phone: phone,
      text: text
    }

    const response = await _sendOtpSmsRequest(parametres)
    return response
  }
}

export {
  PostaGuvercini
}
