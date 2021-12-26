const utils = {
  removeKeyEmptyValue: (data) => {
    return Object.keys(data).reduce((newObj, key) => {
      const value = data[key]

      if (value) {
        newObj[key] = value
      }

      return newObj
    }, {})
  }
}

export default utils
