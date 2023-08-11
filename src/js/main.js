const login = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const verifyEmail = verify(email)
    const verifySenha = verify(password)

    if (verifyEmail === false) {
        alert('email inválido!')
        return
    }
    if (verifySenha === false) {
        alert('senha inválida!')
        return
    }
}

const verify = () => {
    if (campo.trim() === '' || campo.trim() === null || campo.trim() === undefined) {
        return false
    } else return true
}

const criarConta = () => {
    window.location.href = "./criar-conta.html"
}