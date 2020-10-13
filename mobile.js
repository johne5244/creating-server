const HTTP = require("http")

const PORT = 1919
const student = [
    {name:"emmanuel ",age:26}
]

const Server= HTTP.createServer(()=>{
    setTimeout(() => {
        console.log("waiting for server.........")
    }, 9000);
    console.log("Server is Ready!")
});


res.writeHeader(statuscode("content-Type Application/Json"))


res.end()

Server.listen(PORT,() =>{
        console.log(`server is listening too PORT: `);
    });