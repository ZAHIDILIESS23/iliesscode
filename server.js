const http=require('http')
const server=http.createServer((req,res)=>{
   if(req.url=='/home'){
    res.statusCode=200
    res.write('Welcome from home')
   } else if(req.url=='/contact'){
    res.statusCode=200
    res.write('Welcome to contact')
   } else if(req.url=='/about'){
    res.statusCode=200
    res.write('Welcome from about')
   } else{
    res.statusCode=404
    res.write('not found')
   }
    res.end()
})
server.listen(7000,()=>{console.log('server running')})