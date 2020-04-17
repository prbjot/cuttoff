var expr=require('express');
const hbs=require('hbs');
const _=require('lodash');
const fs=require('fs');
var app=expr();

const port=process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials')   

app.use((req,res,next)=>{  
    console.log(""+new Date().getDate());
    next();
});

//Mam used middleware function in below and above statement block
app.use((req,res,next)=>{   
    var log=`${req.method} ${req.url}`;
    console.log("assignment is working ( Method | URL):",log);
    fs.appendFile('assignment.log',log+'\n',(err)=>{
        if(err)
        {
            console.log("error");
        }
    });
    next();
}) 


app.get('/',(req,res)=>{
    
    res.render('home.hbs');
});

app.get('/detail',(req,res)=>{
    res.render('detail.hbs');
    
});

app.get('/regst',(req,res) => {
  res.render('regst.hbs');
});


app.get('/eligible',(req,res) => {
  res.render('eligible.hbs');
});


app.get('*',(req,res)=>{
    res.send("<br><center><h1>Error 404: Page Not Found</h1><center>")
})

 app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});