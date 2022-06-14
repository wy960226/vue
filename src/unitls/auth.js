
const token = "auth-token"

const GetToken = () => {
    localStorage.getItem(token)
}

const SetToken = (info) => {
    localStorage.setItem(token, info)
}

const RemoveToken = () => {
    localStorage.removeItem(token)
}

module.exports = { GetToken, SetToken, RemoveToken }