module.exports = (req, res) => {
    return res.render('home/index', {
        title: 'home',
        msg: 'Welcome to Events app'
    })
}
