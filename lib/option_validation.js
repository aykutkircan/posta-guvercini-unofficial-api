const Joi = require('joi')

const constructorOpionsValidation = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  sender: Joi.string(),
  baseUrl: Joi.string()
})

module.exports = {
  constructorOpionsValidation
}
