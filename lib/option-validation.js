import Joi from 'joi'

const constructorOpionsValidation = Joi.object({
  user: Joi.string(),
  password: Joi.string(),
  baseUrl: Joi.string(),
  otpBaseUrl: Joi.string()
})

export {
  constructorOpionsValidation
}
