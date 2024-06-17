async function editUser(id, modal) {
    let myModal = document.querySelector('#modal-body');
    let getOneUser = await fetch('api/admin/' + id);
    let json = getOneUser.json();
    document.getElementById("modalTitle").innerHTML = "Edit user";
    document.getElementById("modal-footer").innerHTML =
        `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="submit" class="btn btn-primary" id="modalBtn">Edit</button>`;
    json.then(json =>{
        let htmlEdit = `
    <form id="editUser">
       <div class="d-flex flex-column align-items-center">
           <div class="mb-3">
               <h6 class="text-dark fw-bold text-center">ID</h6>
               <input type="text" name="editId" style="width: 400px;" class="form-control" id="editId" value="${json.id}" disabled>
                <input hidden type="password" name="editPassword" class="form-control" id="editPassword" value="${json.password}">
           </div>
           <div class="mb-3">
               <h6 class="text-dark fw-bold text-center">Username</h6>
               <input name="editUsername" style="width: 400px;" class="form-control" type="text" id="editUsername"  value="${json.username}">
           </div>
           <div class="mb-3">
               <h6 class="text-dark fw-bold text-center">Age</h6>
               <input name="editAge" style="width: 400px;" class="form-control" type="text" id="editAge" value="${json.age}">
           </div>
           <div class="mb-3">
               <h6 class="text-dark fw-bold text-center">Email</h6>
               <input name="editEmail" style="width: 400px;" class="form-control" type="text" id="editEmail" value="${json.email}">
           </div>
           <div class="mb-3">
               <h6 class="text-dark fw-bold text-center">Role</h6>
               <select style="width: 400px;" id="editRole" class="form-select" multiple  id="editRole" required="required">
                   <option value="ADMIN">ADMIN</option>
                   <option selected="selected" value="USER">USER</option>
               </select>
           </div>
       </div>
   </form>`
        myModal.innerHTML = htmlEdit;
    })

    document.getElementById("modalBtn").addEventListener('click', async function (evt){
        evt.preventDefault()
        let editForm = document.querySelector('#editUser');
        let id = editForm.editId.value;
        let username = editForm.editUsername.value;
        let age = editForm.editAge.value;
        let email = editForm.editEmail.value;
        let password = editForm.editPassword.value;
        let getRole = () => {
            let array =[];
            let role = document.querySelector('#editRole');
            for (let i = 0; i < role.length; i++) {
                if (role[i].selected) {
                    array.push(roleList[i])
                }
            }
            return array;
        }

        let addUser = {
            id: id,
            username: username,
            age: age,
            email: email,
            password: password,
            roles: getRole()
        }

        let update = await fetch('api/admin', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(addUser)});
        if (update.ok) {
            await getAllUsers();
            modal.modal('hide');

        }
    })
}