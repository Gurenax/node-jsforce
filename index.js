const jsforce = require('jsforce')
require('dotenv').config()

const conn = new jsforce.Connection({
  clientId : process.env.CONSUMER_KEY,
  clientSecret : process.env.CONSUMER_SECRET,
  redirectUri: 'https://localhost:3000/oauth/_callback'
})

const run = async() => {
  try {
    const login = await conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD+process.env.SALESFORCE_SECURITY_TOKEN)
    const result = await conn.query('SELECT Id, Name FROM Account')
    console.log(result)
  } catch(error) {
    console.error(error)
  }
}
run()
