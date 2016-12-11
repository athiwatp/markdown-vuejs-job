var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('http://localhost:8080/')
  .wait(4000)
  .type('textarea[id="textarea"]', '# test1')
  .wait(3000)
  .type('input[id="input"]', 'add1.md')
  .wait(3000)
  .click('button[id="save"]')
  .wait(4000)
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error)
  })
