const url = "http://192.168.1.26/api/auth/";

const editUser = () => {

    const trEdited = document.getElementById("tr-edit");

    trEdited.classList.remove("hidden")

}

const cancelEdit = () => {

    const trEdited = document.getElementById("tr-edit");

    trEdited.classList.add("hidden")

}

const saveUser = () =>{
    const idUser = document.getElementById("id_response").value;
    const nameEdited = document.getElementById("name_edited").value;
    const emailEdited = document.getElementById("email_edited").value;

    const data = {
        id: idUser,
        name: nameEdited,
        email: emailEdited,
    }

    try {
        axios.put(`${url}name/update/${idUser}`, data)
            .then(function (response) {
                searchName();
                console.log(response.data.message)
            })
            .catch(function (error) {
                alert(error.message);
                return
            });
    } catch (error) {
        alert('erro ao acessar a biblioteca')
    }

    const trEdited = document.getElementById("tr-edit");

    trEdited.classList.add("hidden")
}

