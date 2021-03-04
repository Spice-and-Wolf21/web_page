(function(){

    class ValidarAcceso {
        validar() {
            return new Promise((resolve, reject) => {
                resolve()
                /*if(!sessionStorage.getItem('datos-sesion')){
                    window.location.assign('/admin/login')
                    resolve()
                    return
                } else {
                    const token = JSON.parse(sessionStorage.getItem('datos-sesion')).token
                    if (typeof token === 'undefined' || !token) {
                        window.location.assign('/')
                        resolve()
                        return
                    } else {
                        fetch('/secret/acceso', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'access-token': token }
                        })
                            .then(e => {
                                if (e.status === 200 && e.ok) {
                                    resolve()
                                } else {
                                    window.location.assign('/admin/login')
                                    reject()
                                }
                            })
                            .catch(err => console.log(err))
                    }
                }*/
            })
        }
    }

    window.addEventListener('load', () => {
        window.document.body.style.display = 'none'
        const acceso = new ValidarAcceso()

        acceso.validar()
            .then(() => {
                window.document.body.style.display = 'block'
            })
    })
})()