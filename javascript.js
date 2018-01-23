window.addEventListener("load", function(){
    
    
    let headerContent = document.getElementsByClassName("headerContent")[0];
    
    let meny = document.getElementsByClassName("meny")[0];
    let skills = document.getElementsByClassName("skills")[0].children;
    let frontend = document.getElementById("frontend");
    let profil = document.getElementById("profil")
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let contact = document.getElementById("contact");
    let container = document.getElementById("container");
    let containerDivForsta = document.getElementById("forsta");
    let containerDivAndra = document.getElementById("andra");
    let aboutContainer = document.getElementById("aboutContainer")
    let projectContainer = document.getElementById("projectContainer")
    let contactContainer = document.getElementById("contactContainer")
    frontend.style.opacity = "1";
    headerContent.style.top = "120px";
    meny.style.width = "120%";

    
    for(let i =0; i< skills.length; i++){
        
        skills[i].style.width = "150%"
    }
    
    
//********************************************
//***************** MOUSEENTER ******************
//*********************************************
      
    about.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px  #C06C84"
         
    });
    
    projects.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px #F67280"
    });
    
    contact.addEventListener("mouseenter", function(){
        
        profil.style.boxShadow = "0 0 0px 10px #F8B195"
        
    });

    
//*************************************************
//*************** CLICK *****************************
//***********************************************

    let aboutBlock = false; // none 
    let projectsBlock = false;
    let contactBlock = false;
    
    about.addEventListener("click", function(e){
        
        e.preventDefault();
         containerDivForsta.style.backgroundColor = "#C06C84"
        containerDivAndra.style.backgroundColor = "#C06C84"
        
        console.log("aboutBlock: " + aboutBlock);
        console.log("projectsBlock :" + projectsBlock)
        console.log("contactBlock: " + contactBlock)
        if(aboutBlock){
                        container.style.height = "0";
                        aboutBlock = false;

                        
            
        }else{
            aboutContainer.style.display = "block";
            container.style.height = "250px";

            aboutBlock = true; // block
            projectsBlock = false; // block
            contactBlock = false; // none
            
            projectsContainer.style.display = "none";
            contactContainer.style.display = "none";

            
            
           

        }
      
    });
    
    projects.addEventListener("click", function(e){
         e.preventDefault();
        containerDivForsta.style.backgroundColor = "#F67280"
        containerDivAndra.style.backgroundColor = "#F67280"

         console.log("aboutBlock: " + aboutBlock);
        console.log("projectsBlock :" + projectsBlock)
        console.log("contactBlock: " + contactBlock)
        
         if(projectsBlock){
                        container.style.height = "0";
                        projectsBlock = false;
                        projectsContainer.style.display = "none";

            
        }else{
            projectsContainer.style.display = "block";
            container.style.height = "250px";

            projectsBlock = true; // block
            aboutBlock = false; //none
            contactBlock = false; // none
            
            aboutContainer.style.display = "none";
            contactContainer.style.display = "none";
            

        }


        
    })
    
    contact.addEventListener("click", function(e){
         e.preventDefault();
        containerDivForsta.style.backgroundColor = "#F8B195"
        containerDivAndra.style.backgroundColor = "#F8B195"
        
         console.log("aboutBlock: " + aboutBlock);
        console.log("projectsBlock :" + projectsBlock)
        console.log("contactBlock: " + contactBlock)
        
          if(contactBlock){
                        container.style.height = "0";
                       contactBlock = false
            
            
        }else{
            contactContainer.style.display = "block";
            container.style.height = "250px";

            contactBlock = true; // block
             aboutBlock = false; // none
            projectsBlock = false; // none
            
                        aboutContainer.style.display = "none";
                        projectsContainer.style.display = "none";


        }

    
    })
    
    
    
    
})




