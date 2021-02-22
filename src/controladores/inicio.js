module.exports = {
    autorizacion(req, res, next){

        const { token } = req.headers
        if(typeof token === 'undefined'){
            res.redirect('/login')
        } else {
            console.log('siguiente')
            next()
        }
    }
}