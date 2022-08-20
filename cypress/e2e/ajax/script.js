// fetch function return promiss

let renderHtml = function (el) {
    let con = document.querySelector('#users')
    let html = `
    <div>
        <h1>${el.id}</h1>
        <p>${el.first_name}${el.lat_name}</p>
        <p>${el.email}</p>
        <img src ="${el.avatar}">
    <div/>
    `
    con.insertAdjacentHTML("beforeend", html)
}

function getUsers(pageNumber) {
    // fetch function first parameter api url this function return promiss
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) { // consumimg promiss
            return res.json()// convert respons deta into json format using .json method
        }).then(function (res) {
            res.data.forEach(users => {
                renderHtml(users)
            })
        })
}
//getUsers(2)

// pagewise +++> id user ----->id--------->single user info--->html

function singleUserInfo(pageNumber) {
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (res) {
            return res.json()
        }).then(function (res) {
            //console.log(res.data[0].id)
            return res.data[0].id
        }).then(function (id) {
            return fetch(`https://reqres.in/api/users/${id}`)

        }).then(function (res) {
            return res.json()
        }).then(function (res) {
            console.log(res.data)
            renderHtml(res.data)
        })
}
singleUserInfo(1)