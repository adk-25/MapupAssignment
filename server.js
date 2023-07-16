const express=require('express')
const turf=require('@turf/turf')
const line=require('./line.json')
const fs=require('fs')


const app=express()
app.use(express.json)
//request consist of post method
app.post('/',(request,response)=>{
  const linestring=JSON.parse(fs.readFileSync(request.body))
  console.log("new request received")
  //intersection of coordinates received from request and the 50 ids present in code
    const intersection=turf.intersect(line,linestring);

    response.send(utils.createResult(error, intersection))
})

//server uses port 4000
app.listen(4000,'0.0.0.0',()=>{
    console.log("server is started")
})