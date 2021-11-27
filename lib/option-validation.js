import Joi from 'joi'

const constructorOpionsValidation = Joi.object({
  user: Joi.string(),
  password: Joi.string()
})

export {
  constructorOpionsValidation
}
