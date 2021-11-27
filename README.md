
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

const multipleParameters = {
  phones: ['909998887766', '909998887755', '909998887744'],
  text: 'Hello World'
}
```
* `phones` should be array and includes phone numbers.
* `text` text message to be send.


## Functions
- There are three main functions in this version.

* `sendSimpleSms`
* `sendOtpSms`
* `sendBulkSms`

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
    // returns message_id as array
    console.log(response)
  })
  .catch((error) => {
    // returns error message as string
    console.log(error)
  })

// otp sending
postaGuvercini.sendOtpSms(parameters)
  .then((response) => {
    // returns message_id as array
    console.log(response)
  })
  .catch((error) => {
    // returns error message as string
    console.log(error)
  })

  // multiple sms sending
postaGuvercini.sendBulkSms(multipleParameters)
  .then((response) => {
    // returns message_id(s) as array
    console.log(response)
  })
  .catch((error) => {
    // returns error message as string
    console.log(error)
  })

```


## Response Looks Like This

* `response`
```js
[ 'EZ_43D2B5QC-FD3A-396F-82D4-7FFD44F24609' ]
```

* `error`
```js
Error: Hata Kodu: -1003, Hata Mesajı: GSM no geçersiz
```