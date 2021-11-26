
## Installation

Using npm:

```shell
$ npm i posta-guvercini-unofficial-api
```


## Initialize
``` js

// import
import PostaGuvercini from 'posta-guvercini-unofficial-api'


// options
const options = {
  user: 'posta-guvercini-user',
  password: 'posta-guvercini-password'
}


//initialize
const postaGuvercini = new PostaGuvercini(options)

```


## Usage

``` js
const parameters = {
  phones: ['909998887766'],
  text: 'Hello World'
}
```
* `phones` should be array and includes phone numbers.
* `text` text message to be send.


## Example

``` js

const parameters = {
  phones: ['909998887766'],
  text: 'Hello World'
}
const multipleParameters = {
  phones: ['909998887766', '909998887755', '909998887744'],
  text: 'Hello World'
}

// single sms sending
postaGuvercini.sendSimpleSms(parameters)
  .then((response) => {
    console.log(response)
  })

// otp sending
postaGuvercini.sendOtpSms(parameters)
  .then((response) => {
    console.log(response)
  })

  // multiple sms sending
postaGuvercini.sendBulkSms(multipleParameters)
  .then((response) => {
    console.log(response)
  })

```
