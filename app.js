const bodyParser = require("body-parser");
const { response } = require("express");
const express = require("express");
const port = process.env.PORT || 2000

const app     = express();



app.use(bodyParser.urlencoded({extended:true}))
const request = require("request");

app.listen(port,()=>{

  console.log("App is running at port 2000!");

});

app.post("/pics/",(req,res)=>{

  const data = req.body

  const pgno = data.pgnum
  
  request("https://api.unsplash.com/photos?client_id=RFXSb4ctQK3zc2f-awkk3HsyTxDdq3G6YH2Ip0_nwX0&page="+pgno,(error,response,body)=>{




    if(error){
        console.log(error);
    }
   
    else{
      const data = JSON.parse(body);
     
      res.render("pics.ejs",{

        mypics : data
      });
 
    }
 
 
 
 });

});


app.get("/pics/:pgNum",(req,res)=>{

     const pgNumber = req.params.pgNum ;

     console.log(pgNumber);

    request("https://api.unsplash.com/photos?client_id=RFXSb4ctQK3zc2f-awkk3HsyTxDdq3G6YH2Ip0_nwX0&page="+pgNumber,(error,response,body)=>{




        if(error){
            console.log(error);
        }
       
        else{
          const data = JSON.parse(body);
         
          res.render("pics.ejs",{

            mypics : data
          });
     
        }
     
     
     
     });

});


