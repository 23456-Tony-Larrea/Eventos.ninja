;
const express = require('express')
const api = express.Router(),
rutasControl=require('../controladores/controladores')

api.get('/get', rutasControl.getDatos)

module.exports = api