const posts = require("../Data/posts.js")

function index(req, res) {
    res.json({
        posts: posts,
        count: posts.length
    })
}

module.exports = {
    index
}
