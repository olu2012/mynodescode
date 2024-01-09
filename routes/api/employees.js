const express= require('express');
const router=express.Router();
const employees = require('../../employees');
const moment=require('moment');

router.get('/', (req, res) => {

    
    res.json({
     employees
    })
  })

  router.get('/:name', (req, res) => {

    const ifExists=employees.some(e=>e.firstName===req.params.name);
    if(!ifExists) return res.status(400).json({msg:`No employee with the name of ${req.params.name}`})
    res.json(
     employees.filter(e=>e.firstName===req.params.name)
    )
  })

  router.post('/', (req, res) => {
    const newEmployee={
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      age:Math.round(Math.random()*100),
      added:`${moment().format()}`
     
    } 
    employees.push(newEmployee);
     res.json(employees);
    
  })
  router.put('/:firstName', (req, res) => {
    const name = req.params.firstName;
    var newUpdatedEmployees = req.body;
    const ifExists=employees.some(e=>e.firstName===name);
    if(!ifExists) {
        return res.status(400).json({msg:`No employee with the name of ${name}`})
    }
   else{
    employees.forEach(emp => {
      if(emp.firstName === name) {
        emp.firstName = newUpdatedEmployees.firstName;
        emp.lastName = newUpdatedEmployees.lastName;
        emp.age = newUpdatedEmployees.age;
      }
    })
  return res.json(employees);
  
   }
  
  })
  router.delete('/:firstName', (req, res) => {
    const name = req.params.firstName; 
    var newEmployees = req.body;  
    newEmployees = employees.filter(employee => employee.name !== name);
  
    res.json({message: 'Employee deleted successfully'});
  })
  
  module.exports=router;