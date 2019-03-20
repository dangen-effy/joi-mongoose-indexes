# joi-mongoose-indexes

📕 Tiny library to validate indexed mongoose schemas using [Joi](https://github.com/hapijs/joi)

## Example

Write Joi schema.
```
var getSchemaIndexEnum = require('joi-mongoose-indexes')
var userSchema = require('../user')

var getUserQuerySchema = Joi.object().keys({
  name: Joi.string().required(),
  filter: Joi.string().valid(getSchemaIndexEnum(userSchema))  <===== usage
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

