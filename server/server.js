const express=require("express")
const expressGql=require("express-graphql");
const schema = require("./schema");

//create a server
const server=express();

//add port number
const PORT=3201;


//old method used in traditional applications
// server.get("/",function(request,response){
//     response.send("This is Home page created by Piyush") 
// })

//use is a middleware of express
//and add /graph url 
//2nd paramenter pass handeler expressGql in use

//pass options in handler

//for testing use to enable an grapgql interface
//for testing enable true and for production set false

server.use("/graph",expressGql({
    schema:schema,
graphiql:true
}))

server.listen(PORT,function () {
    console.log(`"graphql server is running `,PORT);
})

//for writing queries and mutation we need schema,it will comunicate with operation,it provides a strucuture how the logic will be