const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onViewPoem = function () {
  $('#poem-display').show()
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
  api.updatePoem(id, formData)
    .then(onViewPoem)
    .then(ui.onUpdatePoemSuccess)
    .catch(ui.onError)
}

const onDynamicDestroyPoem = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.destroyPoem(id)
    .then(onViewPoem)
    .then(ui.onDestroyPoemSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreatePoem,
  onViewPoem,
  onDynamicUpdatePoem,
  onDynamicDestroyPoem
}
