import Joi from 'joi'

const constructorOpionsValidation = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  sender: Joi.string(),
  baseUrl: Joi.string()
})

export {
  constructorOpionsValidation
}
