
// import json server
const jsonserver=require('json-server')

// create server
const server=jsonserver.create()

// set router
const router=jsonserver.router("db.json")


// create midle wear act as a parser
const middleware=jsonserver.defaults()

// create port
const PORT=process.env.PORT ||4000


// middleware use in server
server.use(middleware)
server.use(router)

// run server
server.listen(PORT,()=>{
    console.log("media player server started a port:"+PORT);
}
)

