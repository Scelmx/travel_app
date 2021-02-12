const server_url = ""

const http = {
    get: (url, data) => {
        return fetch(server_url+url+data)
    },
    post: (url,data) => {
        fetch(server_url+url,{
            // headers:,
            mode:'cors',
            data:data,
        })
    }
}
const jump = (nav, url) => {
    console.log(111);
    nav.push(url)
}

export default  { http, jump }