const searchName = () => {

    clearTr();

    const name = document.getElementById("name").value;

    try {
        axios.get("http://192.168.1.26/api/auth/search/name/" + name)
            .then(function (response) {
                document.getElementById('id_response').innerHTML = response.data.user.id
                document.getElementById('name_response').innerHTML = response.data.user.name
                document.getElementById('email_response').innerHTML = response.data.user.email
                document.getElementById('created_at_response').innerHTML = response.data.user.created_at
            })
            .catch(function (error) {
                alert(error.message);
                return
            });
    } catch (error) {
        alert('erro ao acessar a biblioteca')
    }

}

function clearTr() {
    document.getElementById('id_response').innerHTML = ''
    document.getElementById('name_response').innerHTML = ''
    document.getElementById('email_response').innerHTML = ''
    document.getElementById('created_at_response').innerHTML = ''
}