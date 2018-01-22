window.addEventListener("load", function(){
    
    
    let headerContent = document.getElementsByClassName("headerContent")[0];
    
    let meny = document.getElementsByClassName("meny")[0];
    let skills = document.getElementsByClassName("skills")[0].children;
    let frontend = document.getElementById("frontend");
    let profil = document.getElementById("profil")
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let contact = document.getElementById("contact");
    
    frontend.style.opacity = "1"
    
    headerContent.style.top = "120px"
    
    for(let i =0; i< skills.length; i++){
        
        skills[i].style.width = "150%"
    }
    meny.style.width = "120%";
    
    
     about.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px  #C06C84"
    })
    
    projects.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px #F67280"
    })
    
    contact.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px #F8B195"
    })
    
    
    
    
    
})
