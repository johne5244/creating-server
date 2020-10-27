const express = require('express');

const root = express.Router();

const{  
    getinfo,
    getinformations,
    postinfo,
    deleteinfo
} = require('../express/controllerouter')

root.route('/').get(getinfo).post(postinfo)
root.route('/id').get(getinformations).delete(deleteinfo)

module.exports = root;