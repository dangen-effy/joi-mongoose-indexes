module.exports = function(schema) {
  const indexEnum = schema.indexes().map(function(index) {
    const [indexFieldName] = Object.keys(index[0])
    return indexFieldName
  })

  return indexEnum
}
