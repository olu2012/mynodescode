const express=require("express");


const app = express();
app.use(express.json());


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//setting up the router
app.use("/api/employees",require("./routes/api/employees"));


  
  
  
  const PORT=process.env.PORT || 3000;
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  
  })


  // Create an empty employees array




/*
Output:
[
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 25 }, 
  { firstName: 'Bob', lastName: 'Smith', age: 35 }
]
*/
