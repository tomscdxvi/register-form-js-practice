function validateForm()
{
    var msg = document.getElementById("usernameMsg");
    var pwMsg = document.getElementById("pwMsg");
    var cpMsg = document.getElementById("cpMsg");
    var cpCheck = document.getElementById("cpChecker");
    var genderMsg = document.getElementById("genderMsg");
    var emailMsg = document.getElementById("emailMsg");
    var contactMsg = document.getElementById("contactMsg");
    

    var radioButton = document.myForm.gender;
    var userInput;

    var u = document.forms["myForm"]["username"].value;
    var p = document.forms["myForm"]["pw"].value;
    var cp = document.forms["myForm"]["confirmpw"].value;
    var e = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["contactnumber"].value;

    var validForm = true;

    if (u == "" || u.length < 5) 
    {
        msg.innerHTML = "This field is required (Min. 5 Characters)";
        msg.style.color = "red";
        msg.style.marginleft = "0.5%";
        validForm = false;
    }

    if(p == "" || p.length < 5) 
    {
        pwMsg.innerHTML = "This field is required (Min. 5 Characters)";
        pwMsg.style.color = "red";
        pwMsg.style.marginleft = "0.5%";
        validForm = false;
    } 

    if(cp == "") 
    {
        cpMsg.innerHTML = "Confirm your password";
        cpMsg.style.color = "red";
        cpMsg.style.marginleft = "0.5%";
        validForm = false;
    }

    if(cp != p) 
    {
        cpCheck.innerHTML = "Password don't match";
        cpCheck.style.color = "red";
        validForm = false;
    } 
    else if(cp == p) 
    {
        cpCheck.innerHTML = "Passwords Match";
        cpCheck.style.color = "green";
    } 

    if(e == "")
    {
        emailMsg.innerHTML = "This field is required";
        emailMsg.style.color = "red";
        emailMsg.style.marginleft = "0.5%";
        validForm = false;
    }

    if(c == "")
    {
        contactMsg.innerHTML = "This field is required";
        contactMsg.style.color = "red";
        contactMsg.style.marginleft = "0.5%";
        validForm = false;
    }

    for(var i = 0; i < radioButton.length; i++) 
    {
        if (radioButton[i].checked == true) 
        {
            userInput = radioButton.value;       
        }
        if (userInput == null)
        {
            genderMsg.innerHTML = "This field is required";
            genderMsg.style.color = "red";
            validForm = false;
        }
        if (userInput != null) 
        {
            genderMsg.innerHTML = "";
        }
    }  

    return validForm;
}

function clearU() 
{
    var u = document.getElementById("username");
    var um = document.getElementById("usernameMsg");

    if(u != "") 
    {
        um.innerHTML = "";
        validForm = false;
    } 
}

function acceptU()
{
    var u = document.getElementById("username").value;
    var um = document.getElementById("usernameMsg");

    if(u.length >= 5){
        um.innerHTML = "Cleared";
        um.style.color = "green";
        um.style.marginleft = "0.5%";
    } 
    else if (u == "" || u.length < 5)
    {
        um.innerHTML = "Not Cleared";
        um.style.color = "red";
        um.style.marginleft = "0.5%";
    }
}

function validatePw()
{
    var c = document.getElementById("pw").value;
    var s = document.getElementById("pwChecker");
    if (c.length < 10) {
        s.innerHTML = "Weak";
        s.style.color = "red";
    } else if (c.length < 15) {
        s.innerHTML = "Medium";
        s.style.color = "orange";
    } else if (c.length > 15) {
        s.innerHTML = "Strong";
        s.style.color = "green";
    }

    if (c.length == "") {
        s.innerHTML = "";
    }
}

function clearP() 
{
    var p = document.getElementById("pw").value;
    var pm = document.getElementById("pwMsg");

    if(p != "") 
    {
        pm.innerHTML = "";
        validForm = false;
    } 
} 

function acceptPw()
{
    var p = document.getElementById("pw").value;
    var pm = document.getElementById("pwChecker");

    if(p.length >= 5){
        pm.innerHTML = "Cleared";
        pm.style.color = "green";
        pm.style.marginleft = "0.5%";
    }
    else if (p == "" || p.length < 5)
    {
        pm.innerHTML = "Not Cleared";
        pm.style.color = "red";
        pm.style.marginleft = "0.5%";
    }
}

function clearCp() 
{
    var cp = document.getElementById("confirmpw").value;
    var cpm = document.getElementById("cpMsg");
    

    if(cp != "") 
    {
        cpm.innerHTML = "";
        validForm = false;
    } 
}

function acceptCp()
{
    var cp = document.getElementById("confirmpw").value;
    var cpm = document.getElementById("cpChecker");
    var p = document.getElementById("pw").value;

    if(cp == "" || cp != p)
    {
        cpm.innerHTML = "Not Cleared";
        cpm.style.color = "red";
        cpm.style.marginleft = "0.5%";
    } 
    else
    {
        cpm.innerHTML = "Cleared";
        cpm.style.color = "green";
        cpm.style.marginleft = "0.5%";
    }
    
}

function clearE() 
{
    var e = document.getElementById("email");
    var em = document.getElementById("emailMsg");

    if(e != "") 
    {
        em.innerHTML = "";
        validForm = false;
    } 
}

function acceptEm()
{
    var e = document.getElementById("email").value;
    var em = document.getElementById("emailMsg");

    if(e != "")
    {
        em.innerHTML = "Cleared";
        em.style.color = "green";
        em.style.marginleft = "0.5%";
    }
    else if (e == "")
    {
        em.innerHTML = "Not Cleared";
        em.style.color = "red";
        em.style.marginleft = "0.5%";
    }
}

function clearCn() 
{
    var c = document.getElementById("contactnumber").value;
    var cm = document.getElementById("contactMsg");

    if(c != "") 
    {
        cm.innerHTML = "";
        validForm = false;
    }
}

function acceptCn()
{
    var c = document.getElementById("contactnumber").value;
    var cm = document.getElementById("contactMsg");

    if(c != "") 
    {
        cm.innerHTML = "Cleared";
        cm.style.color = "green";
        cm.style.marginleft = "0.5%";
    } 
    else if (c == "")
    {
        cm.innerHTML = "Not Cleared";
        cm.style.color = "red";
        cm.style.marginleft = "0.5%";
    }
}

function onlyNum(evt)
{
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 
    && (charCode < 48 || charCode > 57))
    return false;

    return true;
}









