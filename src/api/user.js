const  axios  = require("../unitls/request").default
function Login(query) {
    return axios({
        url: "/api/login",
        method: 'POST',
        data: query,
    })
}
function Register(query) {
    return axios({
        url: "/api/register",
        method: 'POST',
        data: query,
    })
}

module.exports = { Login, Register }