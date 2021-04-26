'use strict'

const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  $('#change-password').hide()
  $('#poem').hide()
  $('.create-poem').hide()
  $('.poem-button').on('click', function () {
    $('.create-poem').toggle()
  })
  $('.sign-out').hide()
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
})
