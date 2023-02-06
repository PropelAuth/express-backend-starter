require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

const {requireUser, requireOrgMember} = require('./propelauth')


app.get('/whoami', requireUser, (req, res) => {
    res.json({user: req.user});
})

app.get('/org/:orgId', requireOrgMember(), (req, res) => {
    res.json({org: req.org})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})