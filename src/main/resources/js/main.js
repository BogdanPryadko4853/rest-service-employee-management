let roleList = [
    {id: 1, roles: "ADMIN"},
    {id: 2, roles: "USER"}
]

let isUser = true;

//Проверка роли
document.addEventListener("DOMContentLoaded", async function verification() {
    const roles = await fetch('api/user');
    let role = "";
    let json = await roles.json();
    for (let i = 0; i < json.roles.length; i++) {
        role = json.roles[i].roles
        if (role === "ADMIN") {
            isUser = false;
        }
    }
    if (isUser) {
        document.getElementById("user-tab").classList.add("active");
        document.getElementById("user").classList.add("show", "active");
        await getUser();
    } else {
        document.getElementById("admin-tab").classList.add("active");
        document.getElementById("admin").classList.add("show", "active");
        await getAllUsers();
    }
})

//Заполнение Header
document.addEventListener("DOMContentLoaded", async function header() {
    let html = ``;
    const infoUser = document.querySelector('#info');
    let user = await fetch('/api/user');
    let json = await user.json();
    html += `<span class="fw-bold">${json.email} </span><span>with roles </span><span>${json.roles.map(role => role.roles)} </span>`
    infoUser.innerHTML = html;
})


