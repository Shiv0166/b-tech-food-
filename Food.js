let logBtn = document.getElementById("logBtn");

 logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").style.display="block";
 })
 addEventListener("click", function(){

    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In");
        document.querySelector(".loginPage").style.display="none";

    }

 })
 