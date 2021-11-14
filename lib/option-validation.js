import Joi from 'joi'

const constructorOpionsValidation = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  baseUrl: Joi.string(),
  otpBaseUrl: Joi.string()
})

export {
  constructorOpionsValidation
}
