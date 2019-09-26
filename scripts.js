//funtion to validate the form and output choices
document.getElementById('submit').addEventListener('click', function ()
{
    var frm = document.getElementById('theForm');
    var isValid = true;
    if(frm.name.value.match(/^\s*$/))
    {
        document.getElementById('nErr').innerHTML = "Cannot be blank";
        frm.name.style.border = "solid 2px red";
        isValid = false;
    }
    else if(frm.name.value.match(/\d/))
    {
        document.getElementById('nErr').innerHTML = "Cannot contain numbers";
        frm.name.style.border = "solid 2px red";
        isValid = false;
    }
    else
    {
        document.getElementById('nErr').innerHTML = "";
        frm.name.style.border = "none";
    }

    
    if(frm.email.value.match(/^\s*$/))
    {
        document.getElementById('eErr').innerHTML = "Cannot be blank";
        frm.email.style.border = "solid 2px red";
        isValid = false;
    }
    else if(!frm.email.value.match(/@/))
    {
        document.getElementById('eErr').innerHTML = "Must contain an '@'";
        frm.email.style.border = "solid 2px red";
        isValid = false;
    }
    else if(!frm.email.value.match(/@\w+/))
    {
        document.getElementById('eErr').innerHTML = "Must contain something between the '@' and '.'";
        frm.email.style.border = "solid 2px red";
        isValid = false;
    }
    else if(!frm.email.value.match(/\.(com|net|edu)/))
    {
        document.getElementById('eErr').innerHTML = "Must contain an '.com', '.net', or '.edu'";
        frm.email.style.border = "solid 2px red";
        isValid = false;
    }
    else
    {
        document.getElementById('eErr').innerHTML = "";
        frm.email.style.border = "none";
    }

    
    if(frm.phone.value.match(/^\s*$/))
    {
        document.getElementById('pErr').innerHTML = "Cannot be blank";
        frm.phone.style.border = "solid 2px red";
        isValid = false;
    }
    else if(frm.phone.value.match(/[a-z]/i))
    {
        document.getElementById('pErr').innerHTML = "Cannot contain letters";
        frm.phone.style.border = "solid 2px red";
        isValid = false;
    }
    else if(frm.phone.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/))
    {
        document.getElementById('pErr').innerHTML = "Must be formatted correctly! (Ex:417.333.4444)";
        frm.phone.style.border = "solid 2px red";
        isValid = false;
    }
    else
    {
        document.getElementById('pErr').innerHTML = "";
        frm.phone.style.border = "none";
    }

    
    if(frm.message.value.match(/^\s*$/))
    {
        document.getElementById('mErr').innerHTML = "Cannot be blank";
        frm.message.style.border = "solid 2px red";
        isValid = false;
    }
    else
    {
        document.getElementById('mErr').innerHTML = "";
        frm.message.style.border = "none";
    }

    if(isValid == true)
    {
        console.log("it's true");
        alert("YOU DID IT!")
    }
});