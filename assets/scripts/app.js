'use strict'

const poemEvents = require('./poems/events')
console.log('poemEvents', poemEvents)
const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  // POEMS
  $('#poem').hide()
  $('.create-poem').hide()
  $('.poem-button').on('click', function () {
    $('.create-poem').toggle()
  })
  $('#create-poem').on('submit', poemEvents.onCreatePoem)
  $('#update-poem').on('submit', poemEvents.onDynamicUpdatePoem)
  $('.view-poem-button').on('click', poemEvents.onViewpoem)

  // USER poem
  $('.change-password-toggle').hide()
  $('#change-password').hide()
  $('.sign-out').hide()
  $('.change-password-toggle').on('click', function () {
    $('#change-password').toggle()
  })
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
})
