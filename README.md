# joi-mongoose-indexes

[![NPM](https://nodei.co/npm/joi-mongoose-indexes.png)](https://nodei.co/npm/joi-mongoose-indexes/)

[![npm version](https://badge.fury.io/js/joi-mongoose-indexes.svg)](https://badge.fury.io/js/joi-mongoose-indexes)
## Introduction

📕 Tiny library to validate indexed mongoose schemas using [Joi](https://github.com/hapijs/joi)


## Example

Write Joi schema.

```
var getSchemaIndexEnum = require('joi-mongoose-indexes')
var user = require('./user')

var getUserQuerySchema = Joi.object().keys({
  name: Joi.string().required(),
  filter: Joi.string().valid(getSchemaIndexEnum(user.schema))  <===== usage
})
```

## Usage

First, create a mongoose schema and index on some fields.

```
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: { type: String, index: true },   <===== Index!
    age: Number,
    gender: String,
    phone: { type: String, index: true },   <===== Index!
    email: { type: String, index: true }   <===== Index!
})

module.exports = mongoose.model('user', userSchema)
```

Now you can try to validate indexed schemas.

```
var query = {
  name: 'John',
  filter: 'gender'
}

Joi.validate(query, getUserQuerySchema)
```

will throw an error

```
> ValidationError: child "filter" fails because ["filter" must be one of [name, phone, email]]
```
