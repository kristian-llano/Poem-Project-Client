const config = require('../config')
const store = require('../store')

const createPoem = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/poems',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const viewPoem = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/poems',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroyPoem = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/poems/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePoem = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/poems/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createPoem,
  viewPoem,
  destroyPoem,
  updatePoem
}
