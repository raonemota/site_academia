const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res){  
    return res.render("about", {item: data})
})

module.exports = routes