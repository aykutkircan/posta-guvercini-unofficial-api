'use strict'

const { options } = require('joi')
const { constructorOpionsValidation } = require('./option_validation')

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
  * @param debug
  */
  constructor (options) {
    const { error, value: optionsWithDefault } = constructorOpionsValidation.validate(options)

    if (error) {
      console.log(error.message)
      throw (error.message)
    }

    this.username = optionsWithDefault.username
    this.password = optionsWithDefault.password
    this.sender = optionsWithDefault.sender
    this.baseUrl = optionsWithDefault.baseUrl
  }

  sendSimpleSms () {
    console.log('username: ', this.username)
    console.log('password: ', this.password)
    console.log('sender: ', this.sender)
    console.log('baseUrl: ', this.baseUrl)
  }
}

module.exports = {
  SayHello,
  PostaGuvercini
}
