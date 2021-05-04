const store = require('../store')

const onCreatePoemSuccess = function (response) {
  store.user.poem = response.poem
  $('.poem-create-message').fadeIn('fast')
  $('.poem-create-message').text('Poem created successfully')
  setTimeout(function () {
    $('.poem-create-message').fadeOut('slow')
  }, 3000)
  $('form').trigger('reset')
}

const onViewPoemSuccess = function (response) {
  $('#poem-view-message').text('Here are your created poems:')
  const poems = response.poems
  let poemsHtml = ''
  poems.forEach(poem => {
    poemsHtml += `
    <hr>
    <h4>Title: ${poem.title}</h4>
    <p>Body: ${poem.body}</p>
    <button class="poem-edit">Edit poem</button>
    <button class='poems-destroy-dynamic' data-id=${poem._id}>
    Delete poem
    </button>
    <form class="poems-update-dynamic" data-id=${poem._id}>
    <input class="poem-title" name='poem[title]' type='text' placeholder='Title' required>
    <input class="poem-body" name='poem[body]' type='text' placeholder='Body' required>
      <button>Update poem</button>
    </form>
      <button class="poem-edit-return">Return</button>
    `
  })
  $('#poem-display').html(poemsHtml)
  $('.poem-edit-return').hide()
  $('.poems-update-dynamic').hide()
}

const onDestroyPoemSuccess = function () {
  $('#poem-delete-message').text('Poem deleted successfully')
  $('#poem-delete-message').fadeIn('fast')
  setTimeout(() => {
    $('#poem-delete-message').fadeOut('slow')
  }, 3000)
}

const onUpdatePoemSuccess = function () {
  $('#poem-update-message').text('poem updated successfully')
  $('#poem-update-message').fadeIn('fast')
  setTimeout(() => {
    $('#poem-update-message').fadeOut('slow')
  }, 3000)
}

const onError = function (err) {
  console.error(err)
  $('#error-message').text('Something went wrong, please try again.')
  $('#error-message').fadeIn('fast')
  setTimeout(function () {
    $('#error-message').fadeOut('slow')
  }, 3000)
}

module.exports = {
  onDestroyPoemSuccess,
  onCreatePoemSuccess,
  onViewPoemSuccess,
  onUpdatePoemSuccess,
  onError
}
