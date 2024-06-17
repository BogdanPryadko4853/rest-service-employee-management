

document.querySelector('#addNewUser').addEventListener("click", async function add(evt){
    evt.preventDefault();
    let addForm = document.querySelector('#formAddUser')
    let username = addForm.addUsername.value;
    let age = addForm.addAge.value;
    let email = addForm.addEmail.value;
    let password = addForm.addPassword.value;
    let getRole = () => {
        let array =[];
        let role = document.querySelector('#Inputrole');
        for (let i = 0; i < role.length; i++) {
            if (role[i].selected) {
                array.push(roleList[i])
            }
        }
        return array;
    }

    let user = {
        username: username,
        age: age,
        email: email,
        password: password,
        roles: getRole()
    }

    let addUser = await fetch('api/admin',
        {method: "POST",
            headers:{
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)});
    if (addUser.ok) {
        await getAllUsers();
        let addForm = $('#formAddUser')
        addForm.find('#username').val('');
        addForm.find('#email').val('');
        addForm.find('#age').val('');
        addForm.find('#password').val('');
        addForm.find(getRole()).val('');
    }
})
