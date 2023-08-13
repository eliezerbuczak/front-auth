const url = "http://192.168.1.26/api/auth/";

const deleteUser = () => {

    const idUser = document.getElementById("id_response").value;

    try {
        axios.delete(`${url}name/delete/${idUser}`)
            .then(function (response) {
                clearTr();
                console.log(response.data.message)
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