const _ = require('lodash')
const fs = require('fs')

function parse(templatePath, params) {
  // Read the template
  let content = fs.readFileSync(templatePath)

  // Convert it to a string
  content = content.toString()

  // Search and replace the variables surrounded by this prefix/suffix
  const valuePrefix = '{{'
  const valueSuffix = '}}'

  _.forEach(params, (toValue, valueKey) => {
    const valueTag = valuePrefix + valueKey + valueSuffix
    const fromValue = new RegExp(valueTag, 'g')

    content = content.replace(fromValue, toValue)
  })

  // Return the parsed template
  return content
}

module.exports = {
  parse,
}
