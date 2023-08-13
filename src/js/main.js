const url = "http://192.168.1.26/api/auth/";

const login = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let campos = [];
    campos.push(email);
    campos.push(password);

    if (verify(campos)) {
        const data = {
            email: email,
            password: password,
        }

        try {
            axios.post(`${url}login`, data)
                .then(function (response) {
                    window.location.href = "./logado.html"

                })
                .catch(function (error) {
                    alert(error.message);
                    return
                });
        } catch (error) {
            alert('erro ao acessar a biblioteca')
        }
    } else {
        alert('campos nao preenchidos')
    }

}

const verify = (campos) => {

    for (let i = 0; i < campos.length; i++) {
        if (campos[i] === '' || campos[i] === null || campos[i] === undefined) {
            return false
        }
    }
    return true
}

const criarConta = () => {
    window.location.href = "./criar-conta.html"
}



let response = {
    statusCode: 153,
    token: sadsadsadsa,
    request: {
        ip: localhost,
        host: '192.168.1.26',
        endpoint: '/api/auth/search/name'
    },
    data: {
        data: {
            id: 1,
            name: 'teste'
        },
        status: true
    },


}