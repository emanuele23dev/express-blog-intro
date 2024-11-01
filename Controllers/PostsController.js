const posts = require("../Data/posts.js")

function index(req, res) {
    res.json(posts)
}

module.exports = {
    index                       
}
 