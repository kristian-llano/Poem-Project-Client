const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onViewPoem = function () {
  // $('#question-return').show()
  // $('#questions-display').show()
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

const onDynamicUpdatePoem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateQuestion(id, formData)
    .then(onViewPoem)
    .then(ui.onUpdatePoemSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreatePoem,
  onViewPoem,
  onDynamicUpdatePoem

}
