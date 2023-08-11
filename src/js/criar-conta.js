const register = () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmed = document.getElementById("password-confirmed").value;

    let campos = [];
    campos.push(name);
    campos.push(email);
    campos.push(password);
    campos.push(passwordConfirmed);

    if (verify(campos)) {

        if (verifyPassword(password, passwordConfirmed)) {
            const data = {
                name: name,
                email: email,
                password: password,
            }

            try {
                axios.post("http://192.168.1.26/api/auth/register", data)
                    .then(function (response) {
                        alert(response.message)
                        window.location.href = "./index.html"

                    })
                    .catch(function (error) {
                        alert(error.message);
                        return
                    });
            } catch (error) {
                alert('erro ao acessar a biblioteca')
            }
        } else {
            alert('senhas diferentes')
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


const verifyPassword = (password, passwordConfirmed) => {
    if (password === passwordConfirmed) {
        return true
    }
    return false

}