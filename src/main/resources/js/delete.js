async function deleteUser(id, modal) {
    let myModal = document.querySelector('#modal-body');
    let getOneUser = await fetch('api/admin/' + id, {method: 'GET'});
    let json = getOneUser.json();
    document.getElementById("modalTitle").innerHTML = "Delete user";
    document.getElementById("modal-footer").innerHTML =
        `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary" id="modalBtn">Delete</button>`;
    json.then(json => {
        let html =`
    <form id="deleteForm">
        <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
                <h6 class="text-dark fw-bold text-center">ID</h6>
                <input disabled style="width: 400px;" class="form-control" type="text" name="username" value="${json.id}">
            </div>
            <div class="mb-3">
                <h6 class="text-dark fw-bold text-center">Username</h6>
                <input disabled style="width: 400px;" class="form-control" type="text" name="username" value="${json.username}">
            </div>
            <div class="mb-3">
                <h6 class="text-dark fw-bold text-center">Age</h6>
                <input disabled style="width: 400px;" class="form-control" type="text" name="age" value="${json.age}">
            </div>
            <div class="mb-3">
                <h6 class="text-dark fw-bold text-center">Email</h6>
                <input disabled style="width: 400px;" class="form-control" type="text" name="email" value="${json.email}">
            </div>
            <div class="mb-3">
                <h6 class="text-dark fw-bold text-center">Role</h6>
                <select disabled style="width: 400px;" class="form-select" multiple name="listRoles" required="required">
                    <option value="ADMIN">ADMIN</option>
                    <option selected="selected" value="USER">USER</option>
                </select>
            </div>
        </div>
    </form>
    `
    myModal.innerHTML = html;

    })
    document.getElementById("modalBtn").addEventListener('click',  async function (evt){
        const deleteUser = await fetch('api/admin/' + id , {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Referer': null
            }});
        if (deleteUser.ok) {
            await getAllUsers();
            modal.modal('hide');
        }
    })
}
