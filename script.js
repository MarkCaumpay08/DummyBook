"use strict";

var database = [
    {
        username : "dummyuser01",
        password : "dummypassword"
    },
    {
        username : "dummyuser02",
        password : "dummypassword"

    }
];

var newsFeed = [
    {
        username : "dummyuser01",
        timeline : "dummy post 01"
    },
    {
        username : "dummyuser01",
        timeline : "dummy post 02"
    },
    {
        username : "dummyuser02",
        timeline : "dummy post 01"
    }
];


var userNamePrompt = prompt("Enter username: ");
var passwordPrompt = prompt("Enter pasword: ");
var validity = false;

for(var i = 0; i < database.length; i++){
    if(database[i].username == userNamePrompt){
        if(database[i].password == passwordPrompt){
      
            validity = true;
        }else{
            alert("Wrong Username or Password11!");   
        }
        console.log("here");
    }else{
        alert("Wrong Username or Password22!");
        console.log("here2");
    }
}

if(validity){
    alert(newsFeed);
}


