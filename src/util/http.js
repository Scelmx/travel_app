const server_url = ""

const http = {
    get(url) {
        fetch(server_url+url)
    },
    post(url,data){
        fetch(server_url+url,{
            // headers:,
            mode:'cors',
            data:data,
        })
    }
}
