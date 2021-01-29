/*********************************************************************************
 * WEB700–Assignment2
 * I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Geet Kumar Choubey Student ID: 155876196 Date: 29 Jan 2021
 * 
 ********************************************************************************/

 const serverData = require('./modules/serverDataModule');

 serverData.initialize().then(_ => {
     serverData.getAllEmployees().then(employees => {
        console.log(`Successfully retrieved ${employees.length} employees.`);
    }).catch(e => console.error(e));
     serverData.getDepartments().then(departments => {
        console.log(`Successfully retrieved ${departments.length} departments.`);
    }).catch(e => console.error(e));
    serverData.getManagers().then(managers => {
        console.log(`Successfully retrieved ${managers.length} managers.`);
    }).catch(e => console.error(e));
 }).catch(e => console.error(e));