import { constructorOpionsValidation } from './option-validation.js'

class SayHello {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  sayHello () {
    console.log('Hello World', this.x, this.y)
  }
}

class PostaGuvercini {
  /**
  * @param username
  * @param password
  * @param sender
  * @param baseUrl
  */
  constructor (options) {
    const { error, value: optionsWithDefault } = constructorOpionsValidation.validate(options)

    if (error) {
      throw (error.message)
    }

    this.username = optionsWithDefault.username
    this.password = optionsWithDefault.password
    this.sender = optionsWithDefault.sender
    this.baseUrl = optionsWithDefault.baseUrl
  }

  /**
   * @param {['no1']} phone
   * @param {'Hello World!'} text
   * @returns
   */
  async sendSimpleSms ({ phone, text }) {
    console.log('username:', phone)
    console.log('password:', text)

    return {
      phone,
      text
    }
  }

  /**
   * @param {['no1', 'no2', 'no3']} phones
   * @param {'Hello world'} text
   * @returns
   */
  async sendAdvancedSms (phones, text) {
    return {
      phones,
      text
    }
  }
}

export {
  SayHello,
  PostaGuvercini
}
