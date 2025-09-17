const aboutme = document.getElementById("aboutme")
const mycontact=document.getElementById("mycontact")
const myskill=document.getElementById("myskill")
const about=document.getElementById("about")
const contact=document.getElementById("contact")
const skill=document.getElementById("skill")

aboutme.onclick=function(){
    about.style.display="block"
    contact.style.display="none"
    skill.style.display="none"
}

mycontact.onclick=function(){
    about.style.display="none"
    contact.style.display="block"
    skill.style.display="none"
}

myskill.onclick=function(){
    about.style.display="none"
    contact.style.display="none"
    skill.style.display="block"
}