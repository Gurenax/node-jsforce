const jsforce = require('jsforce')
require('dotenv').config()

const conn = new jsforce.Connection({
  clientId : process.env.CONSUMER_KEY,
  clientSecret : process.env.CONSUMER_SECRET,
  redirectUri: 'https://localhost:3000/oauth/_callback'
})

conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD+process.env.SALESFORCE_SECURITY_TOKEN, function(err, res) {
  if (err) {
    return console.error(err)
  }
  conn.query('SELECT Id, Name FROM Account', function(err, res) {
    if (err) {
      return console.error(err)
    }
    console.log(res)
  })
})
