const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onViewPoem = function (event) {
  api.viewPoem()
    .then(ui.onViewPoemSuccess)
    .catch(ui.onError)
}

const onCreatePoem = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createPoem(formData)
    .then(ui.onCreatePoemSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreatePoem,
  onViewPoem

}
