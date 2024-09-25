var bodycontent;
bodycontent=document.body.textContent;
console.log(bodycontent);


function searchfun(){
    let contenttxt;
    contenttxt=document.getElementById("search-form").value;
    if(contenttxt===null){
        alert("Please enter the text to search");
    }
    else{
        if(bodycontent.includes(contenttxt)){
            let regexp;
            regexp=new RegExp(contenttxt, "gi");
            var highlighted;
            highlighted=bodycontent.replace(regexp, `<span class="highlightedText">$(highlight)</span>`);
            bodycontent.innerHTML=highlighted;
        }
    }
    

}

function hireme(){
    window.open("https://www.linkedin.com/in/saurabh-kumar-178953203/", "width=500px", "height=500px");
}

function mesg(){
    window.open("contact-us.html", "width=500px", "height=600px");
}

function flw(){
    window.open("index.html","_blank");
}

function validateusername(){
    let string;
    string=document.getElementById('user-name').value;
    console.log(string);
    var nullChar;
    nullChar=" ";
    if(string.length>15 || nullChar.length>3){
        alert("Length of Name should be less than or equal to 15. Please enter your name in an appropriate length");
    }
    else{
        let regExpr;
        regExpr=/^[a-zA-Z\s/\b]+$/gi;
        if(regExpr.test(string)){
            document.getElementById('user-name')[0].innerHTML.style.backgroundColor="green";
        }
        else{
            alert("Please enter your correct name");
        }
    }
}

function validateemailid(){
    var x=/^[a-zA-Z\._]{4,}[@][a-z]{2,}[.][a-z.]{2,}$/;
    var eMail=document.getElementById("user-email-id").value;
    if(x.test(eMail)){
        document.getElementById("user-email-id")[0].innerHTML.style.outlineColor="green";
        return true;
    }
    else{
        document.getElementById("user-email-id")[0].innerHTML.style.outlineColor="red";
        return false;                
    }
}

function submitForm(){
    let responseMessage=document.getElementsByClassName("response-message").innerHTML;
    responseMessage.style.display="block";
    let contactForm=document.getElementById("contact-form").innerHTML;
    contactForm.style.display="none";
}
