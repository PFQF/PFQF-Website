var submitted=false;

const form= document.querySelector("form");
const Name= document.getElementById("name");
const Email= document.getElementById("email");
const mess= document.getElementById("message");
const pop= document.getElementById("popup");
function check(){
    const items= document.querySelectorAll(".item");

    for(const item of items) {
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

if(items[1].value !=""){
    check_email();
}

items[1].addEventListener("keyup",() =>
{
    check_email();
});

        item.addEventListener("keyup",() =>
        {
            if(item.value !="")
            {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function check_email(){
const emailt= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const error_email=document.querySelector(".error-txt.email")
if(!Email.value.match(emailt)){
Email.classList.add("error"); 
Email.parentElement.classList.add("error");
if(Email.value == ""){
    error_email.innerText ="Email can't be blank";
}
else{
    error_email.innerText ="Enter a valid email address";
}
}
else{
    Email.classList.remove("error"); 
    Email.parentElement.classList.remove("error"); 
}
}

form.addEventListener("submit",(e)=> {
    check();
    if (!Name.classList.contains("error") && !Email.classList.contains("error")
&& !mess.classList.contains("error")){
    pop.classList.add("view_popup");
    form.classList.add("inform");
}
else{
    e.preventDefault();
}
});
