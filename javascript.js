window.addEventListener("load", function(){


    let headerContent = document.getElementsByClassName("headerContent")[0];

    let meny = document.getElementsByClassName("meny")[0];
    let skills = document.getElementsByClassName("skills")[0].children;
    let skillsDiv = document.getElementsByClassName("skills")[0];
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
    let html = document.getElementById("html")
    let css = document.getElementById("css")
    let javascript = document.getElementById("javascript")
    let react = document.getElementById("react")

    let htmlStar = document.getElementById("star1")
    let cssStar = document.getElementById("star2")
    let javascriptStar = document.getElementById("star3")
    let reactStar = document.getElementById("star4")


    frontend.style.opacity = "1";
    headerContent.style.top = "120px";
    meny.style.width = "100%";


  // function MediaLitenScreen(){

  function normalScreen(){
    for(let i =0; i< skills.length; i++){


        if(i === 2)
        skills[i].style.width = "70%"
        else if(i  > 1){
          skills[i].style.width = "80%"

        }
        else {
          skills[i].style.width = "50%"

        }
    }
}

function Screen(){

  if(window.innerWidth > 700){

    for(let i =0; i< skills.length; i++){


        if(i === 2)
        skills[i].style.width = "100%"
        else if(i  > 1){
          skills[i].style.width = "110%"

        }
        else {
          skills[i].style.width = "80%"

        }
    }
  }

}

  Screen()
    window.addEventListener("resize",function(){

        if(window.innerWidth>700){

            Screen()

        }else{

            normalScreen()
        }

    })
  // }
  //
  // function MediaStorstScreen(){
  //
  //
  //       skillsDiv.style.left = "200px"
  //
  // }
  //
  //   function MediaStorreScreen(){
  //
  //     for(let i =0; i< skills.length; i++){
  //
  //
  //         if(i === 2)
  //         skills[i].style.width = "120%"
  //         else if(i  > 1){
  //           skills[i].style.width = "130%"
  //
  //         }
  //         else {
  //           skills[i].style.width = "100%"
  //
  //         }
  //     }
  //
  //   }
  //
  //   if(window.innerWidth>500){
  //     MediaStorreScreen()
  //   }else if(window.innerWidth < 500){
  //     MediaLitenScreen()
  //   }
  //
  //   window.addEventListener("resize", function() {
  //
  //     if(window.innerWidth > 500){
  //
  //         MediaStorreScreen()
  //     }else if(window.innerWidth < 500){
  //
  //       MediaLitenScreen()
  //     }else if(window.innerWidth > 700){
  //
  //       MediaStorstScreen()
  //     }
  //
  //
  //   });


//********************************************
//***************** MOUSEENTER ******************
//*********************************************

    about.addEventListener("mouseenter", function(){

        // profil.style.boxShadow = "0 0 0px 10px #F5FF00";
        profil.style.boxShadow = "0 0 0px 5px  #F5FF00"

        about.style.backgroundColor = "#F5FF00";
        projects.style.backgroundColor = "rgba(0,0,0,0.2)";
        contact.style.backgroundColor = "rgba(0,0,0,0.2)";

    });

    projects.addEventListener("mouseenter", function(){

          profil.style.boxShadow = "0 0 0 5px  #FF005F";
          projects.style.backgroundColor = "#FF005F"

          about.style.backgroundColor = "rgba(0,0,0,0.2)"
          contact.style.backgroundColor = "rgba(0,0,0,0.2)"
        // profil.style.boxShadow = "0 0 0px 10px #F67280"
    });

    contact.addEventListener("mouseenter", function(){

        contact.style.backgroundColor = "#56C600"

        profil.style.boxShadow = "0 0 0 5px  #56C600";
        about.style.backgroundColor = "rgba(0,0,0,0.2)"
        projects.style.backgroundColor = "rgba(0,0,0,0.2)";

        // profil.style.boxShadow = "0 0 0px 10px #F8B195"

    });


    function display(skill){
      if(skill === htmlStar){
        htmlStar.style.display = "block"
        cssStar.style.display = "none"
        javascriptStar.style.display = "none"
        reactStar.style.display = "none"
      }else if( skill === cssStar){
        cssStar.style.display = "block"
       htmlStar.style.display = "none"
        javascriptStar.style.display = "none"
        reactStar.style.display = "none"
      }else if( skill === javascriptStar){
          javascriptStar.style.display = "block"
         cssStar.style.display = "none"
         htmlStar.style.display = "none"
        reactStar.style.display = "none"
      }else if(skill === reactStar){
              reactStar.style.display = "block"
        javascriptStar.style.display = "none"
         cssStar.style.display = "none"
       htmlStar.style.display = "none"
      }


    }

    if(window.innerWidth > 1000){

      html.addEventListener("mouseenter", function(){


          display(htmlStar)

          html.addEventListener("mouseleave", function(){
              htmlStar.style.display = "none"
          })

      })
       css.addEventListener("mouseenter", function(){

            display(cssStar)
            css.addEventListener("mouseleave", function(){
              cssStar.style.display = "none"
          })

      })
       javascript.addEventListener("mouseenter", function(){

          display(javascriptStar)
            javascript.addEventListener("mouseleave", function(){
              javascriptStar.style.display = "none"
          })


      })
       react.addEventListener("mouseenter", function(){

          display(reactStar)

            react.addEventListener("mouseleave", function(){
              reactStar.style.display = "none"
          })


      })

    }

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

         projects.style.background = "red";
         profil.style.boxShadow = "0 0 0 5px #FF005F ";

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
