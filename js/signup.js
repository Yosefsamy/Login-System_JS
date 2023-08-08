
                                "use strict"

//* Declare Global Variables *//
let signUpName=document.getElementById("signUpName");
let signUpEmail=document.getElementById("signUpEmail");
let signUpPassword=document.getElementById("signUpPassword");

//* Declare Array *//
let signupArray=[];

//^^^^^^^^^^^^^^^^^ Get Items From Local Storage ^^^^^^^^^^^^^^^^^^^//
if(localStorage.getItem("signupArray")!=null){
    signupArray=JSON.parse(localStorage.getItem("signupArray"));  // ? Get Items -> Array of Objects ? //
}



//& Click ======> signupButton &//
signupButton.addEventListener("click",function(){

    //! Check The Inputs Empty Or Not !//
    if(notEmpty()){

        //! Check The Validation of Inputs !//
        if(validateSignUpName() && validateSignUpEmail() && validateSignUpPassword()){

            let flag=true;   //~ if still true -> add , else (false) -> email already exists ~//

            for(let i=0;i<signupArray.length;i++){

                if(signUpEmail.value==signupArray[i].email){
                    flag=false;
                    break;
                }

            }

            //! Email Is Unique !//
            if(flag==true){
                addNewUser();
                localStorage.setItem("signupArray",JSON.stringify(signupArray));    // ? Set Items -> String ? //
                clearForm();

                document.getElementById("confirmed").innerHTML=
                `<span class="text-success">Success</span>`

                console.log(signupArray);

                location.href="./index.html"     //^ Automatically go to sign in page //^

            }

            //! The Email Is Already Exists !//
            else{
                document.getElementById("confirmed").innerHTML=
                `<span class="text-warning">email already exists</span>`
            }

        }

        //! when inputs are not empty and wrong !//
        else{
            document.getElementById("confirmed").innerHTML=
            `<span class="text-warning">The registration process has not been completed</span>`
        }

    }

    //! when inputs are empty !//
    else{
        document.getElementById("confirmed").innerHTML=
        `<span class="text-danger">All inputs are required</span>`
    }

})


//* Declare validateSignUpName() Function *//
function addNewUser(){
    let user={
        name:signUpName.value,
        email:signUpEmail.value,
        password:signUpPassword.value
    }
    signupArray.push(user)
}

//* Declare validateSignUpName() Function *//
function validateSignUpName(){
    let regex=/^(\w{5,10})$/i;
    if(regex.test(signUpName.value)){
        document.getElementById("wrongName").classList.replace('d-block','d-none');
        return true;
    }
    else{
        document.getElementById("wrongName").classList.replace('d-none','d-block');
        return false;
    }

}

//& On Input ======> signUpName &//
signUpName.addEventListener('input',function(){
    validateSignUpName();
})


//* Declare validateSignUpEmail() Function  *//
function validateSignUpEmail(){
    let regex=/^\w+@gmail\.com$/i;
    if(regex.test(signUpEmail.value)){
        document.getElementById("wrongEmail").classList.replace('d-block','d-none');
        return true;
    }
    else{
        document.getElementById("wrongEmail").classList.replace('d-none','d-block');
        return false;
    }

}

//& On Input ======> signUpEmail &//
signUpEmail.addEventListener('input',function(){
    validateSignUpEmail();
})



//* Declare validateSignUpPassword() Function  *//
function validateSignUpPassword(){
    let regex=/^(\w{6,})$/i;
    if(regex.test(signUpPassword.value)){
        document.getElementById("wrongPassword").classList.replace('d-block','d-none');
        return true;
    }
    else{
        document.getElementById("wrongPassword").classList.replace('d-none','d-block');
        return false;
    }

}

//& On Input ======> signUpPassword &//
signUpPassword.addEventListener('input',function(){
    validateSignUpPassword();
})


//* Declare notEmpty() Function *//
function notEmpty() {
   if (signUpName.value=="" || signUpEmail.value=="" || signUpPassword.value=="")
        return false;

   else
        return true;

}

//* Declare clearForm() Function *//
function clearForm(){

    signUpName.value="";
    signUpEmail.value="";
    signUpPassword.value="";

}
