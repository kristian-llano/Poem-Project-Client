'use strict'

const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  $('.sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
})
