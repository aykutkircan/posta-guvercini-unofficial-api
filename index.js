
const { SayHello, PostaGuvercini } = require('./lib/posta-guvercini')

const options = {
  username: 'Aykut',
  password: 'ad2sf4%&',
  sender: 11,
  baseUrl: 12
}

const sayHello = new SayHello('x', 'y')
const postaGuvercini = new PostaGuvercini(options)

postaGuvercini.sendSimpleSms()
// sayHello.sayHello()
