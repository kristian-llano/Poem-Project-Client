'use strict'

const authEvents = require('./auth/events')
console.log('authEvents', authEvents)

$(() => {
  $('#poem').hide()
  $('.create-poem').hide()
  $('.poem-button').on('click', function () {
    $('.create-poem').toggle()
  })
  $('.sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
})
