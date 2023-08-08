
                                "use strict"

//* Declare Global Variables *//
let signInEmail=document.getElementById("signInEmail");
let signInPassword=document.getElementById("signInPassword");
let signInButton=document.getElementById("signInButton");
let userName;      //~ Store Username ~//

//~ Hold 2 Sections By ID ~//
let loginPage=document.getElementById("login-page")
let homePage=document.getElementById("home-page")

//* Declare Array *//
let signInArray=[];

//^^^^^^^^^^^^^^^^^ Get Items From Local Storage ^^^^^^^^^^^^^^^^^^^//
if(localStorage.getItem("signupArray")!=null){
    signInArray=JSON.parse(localStorage.getItem("signupArray"));  // ? Get Items -> Array of Objects ? //

}

//& Click ======> signInButton &//
signInButton.addEventListener("click",function(){

    if(notEmpty()){
        matchedUser(signInArray);

    }
    else{
        document.getElementById("matched").innerHTML=
        `<span class="text-danger">All inputs are required</span>`
    }

})


//* Declare matchedUser(list) Function *//
function matchedUser(list){

    let flag=false;
    for(let i=0;i<list.length;i++){

        if(signInEmail.value==list[i]. email && signInPassword.value==list[i].password){
            userName=list[i].name;  //& We will use it in home page &//
            flag=true;
            break;
        }

    }

    if(flag){
        document.getElementById("matched").innerHTML='';
        clearForm();

        //^ display username in home page ^//
        document.getElementById("displayName").innerHTML+=" "+userName

        //? Home Page Appear and Login Page d-none ?//
        loginPage.classList.add('d-none');
        homePage.classList.replace('d-none','d-block');

    }
    else{
        document.getElementById("matched").innerHTML=
        `<span class="text-danger">incorrect email or password</span>`
    }

}

//* Declare notEmpty() Function *//
function notEmpty(){

    if (signInEmail.value=="" || signInPassword.value=="")
    return false;

else
    return true;

}


//* Declare clearForm() Function *//
function clearForm(){
    signInEmail.value="";
    signInPassword.value="";

}


