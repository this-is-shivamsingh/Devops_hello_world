require('dotenv').config({ path: `./env/.env.${process.env.NODE_ENV || 'development'}` });
const express = require('express')
const db = require('./models')
const { User } = require('./models')

const app = express()

app.get('/select', async (req, res) => {
  const _users = await User.findAll()
  res.send(`All Users - \n ${JSON.stringify(_users)}`)
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

app.post('/insert', async(req, res) => {
  try {
    await User.create({
      name: `test-${getRandomInt(1, 1000)}`,
      email: 'test@gmail.com',
      role: 'test',
      age: getRandomInt(10, 50)
    })
  } catch (error) {
    res.send(`User is not created ${error}`)
    return 
  }
  res.send('User create successfully')
})
app.listen(3000, () => console.log('Server started at 3000'))