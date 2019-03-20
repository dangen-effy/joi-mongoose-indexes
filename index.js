export default function(schema) {
  const indexEnum = schema.indexes().map(index => {
    const [indexFieldName] = Object.keys(index[0])
    return indexFieldName
  })

  return indexEnum
}
