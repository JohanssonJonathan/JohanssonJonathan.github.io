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

    let sendInfo = document.getElementsByClassName("sendInfo")[0]
    let body = document.getElementsByTagName("body")[0]

    let htmlStar = document.getElementById("star1")
    let cssStar = document.getElementById("star2")
    let javascriptStar = document.getElementById("star3")
    let reactStar = document.getElementById("star4")

    let sida = 1;

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let textarea = document.getElementById("textarea")

    let sendBtn = document.getElementById("send")

    let obj = {
      firstName:"",
      lastName:"",
      email:"",
      textarea:""

    }


    firstName.addEventListener("change",function(e){

          console.log(firstName.value)
          obj.firstName = firstName.value

    })
    lastName.addEventListener("change",function(e){

          console.log(lastName.value)

          obj.lastName = lastName.value

    })

    email.addEventListener("change",function(e){

          console.log(email.value)
          obj.email = email.value

    })
    textarea.addEventListener("change",function(e){

          console.log(textarea.value)
          obj.textarea = textarea.value
    })



// FIREBASE //
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCxJ8mK93AaiTDHSwmJI5aR4ad-fgzo-Js",
      authDomain: "jonathanjohansson-69096.firebaseapp.com",
      databaseURL: "https://jonathanjohansson-69096.firebaseio.com",
      projectId: "jonathanjohansson-69096",
      storageBucket: "",
      messagingSenderId: "457637347025"
    };
    firebase.initializeApp(config);



    const db = firebase.database()




        sendBtn.addEventListener("click",function(){
          firstName.value = ""
          lastName.value = ""
          email.value = "";
          textarea.value = ""
          db.ref("/").push(obj)
          console.log("hsj")
          sendInfo.style.display = "block";
          sendInfo.style.zIndex = "200"



        })

          window.addEventListener("click",function(){
            sendInfo.style.display = "none";
          })

  /*********************************************/

    frontend.style.opacity = "1";
    headerContent.style.top = "20px";
    meny.style.width = "85%";



/***************************************************************
***** Elementens storlek beroende på skärmstorlek ************************************
************************************************************/

function forloop(val1, val2, val3){ // Elementen ändras beroende på hur stor skärmen är.
  for(let i =0; i< skills.length; i++){

      if(i === 2)
      skills[i].style.width = val1/*"70%"*/
      else if(i  > 1){
        skills[i].style.width = val2/*"80%"*/

      }
      else {
        skills[i].style.width = val3 /*"50%"*/

      }
  }
}

function normalScreen(val1, val2, val3){
    forloop(val1, val2, val3)
}

function Screen(val1, val2, val3){

  if(window.innerWidth > 700){

    forloop(val1, val2, val3)

}

}
  normalScreen() // Om anvädaren inte resizar fönstret utan kommer in på ett speciellt mått när man relodar.
  Screen()// Om anvädaren inte resizar fönstret utan kommer in på ett speciellt mått när man relodar.


  if(window.innerWidth>700){

      Screen("100%","110%","80%") // Skickas till en function som i sin tur skickar vidare den till en loop med speciella värden för det måttet

  }else{

      normalScreen("70%", "80%","50%")//Skickar värden till en funktion som loopar igenom

  }


  //Om användaren rezisar fönstret
    window.addEventListener("resize",function(){

        if(window.innerWidth>700){

            Screen("100%","110%","80%") // Skickas till en function som i sin tur skickar vidare den till en loop med speciella värden för det måttet

        }else{

            normalScreen("70%", "80%","50%")//Skickar värden till en funktion som loopar igenom

        }

    })


//*************************************************
//*************** CLICK PÅ ABOUT, PROJECTS och CONTACT *****************************
//***********************************************


about.addEventListener("click", function(e){
    e.preventDefault();
      sida = 1;
      sidan()
});

projects.addEventListener("click", function(e){
     e.preventDefault();
    sida = 2;
    sidan()
  })

contact.addEventListener("click", function(e){
     e.preventDefault();
     sida = 3;
     sidan()

})

// För att se vilket content som syns eller inte.

let aboutBlock = true; // Content Syns
let projectsBlock = false; // Content syns inte
let contactBlock = false;//content syns inte




    function sidan(){
      if(sida === 1){
          about.style.background = "#FFE100"
          profil.style.boxShadow = "0 0 0 5px  #FFE100";

          projects.style.background =" rgba(0,0,0,0.2)"
          contact.style.background =" rgba(0,0,0,0.2)"

          if(aboutBlock){
              container.style.height = "0";
              aboutBlock = false;

          }else{

               blockBool()

          }


      }else if(sida===2){
          projects.style.background ="#FF005F"
                profil.style.boxShadow = "0 0 0 5px  #FF005F";

                about.style.background =" rgba(0,0,0,0.2)"
                contact.style.background =" rgba(0,0,0,0.2)"


                if(projectsBlock){
                   container.style.height = "0";
                   projectsBlock = false;
               }else{
                   blockBool()

                }
      }else{

        contact.style.background = "#56C600"
              profil.style.boxShadow = "0 0 0 5px  #56C600";

              projects.style.background =" rgba(0,0,0,0.2)"
              about.style.background =" rgba(0,0,0,0.2)"

              if(contactBlock){
                  container.style.height = "0";
                 contactBlock = false


            }else{
                blockBool()


            }

      }
    }





        function blockBool(){
          if(sida === 1){
            aboutBlock = true; // block
            projectsBlock = false; // block
            contactBlock = false; // none
            aboutContainer.style.display = "block";
            container.style.height = "";
            projectsContainer.style.display = "none";
            contactContainer.style.display = "none";


          }else if(sida === 2){
            projectsBlock = true; // block
            aboutBlock = false; //none
            contactBlock = false; // none
            projectsContainer.style.display = "block";
            container.style.height = "340px";
            aboutContainer.style.display = "none";
            contactContainer.style.display = "none";
          }else{
            contactBlock = true; // block
             aboutBlock = false; // none
            projectsBlock = false; // none
            contactContainer.style.display = "block";
            container.style.height = "305px";
            aboutContainer.style.display = "none";
            projectsContainer.style.display = "none";
          }
        }







    // function display(skill){
    //   if(skill === htmlStar){
    //     htmlStar.style.display = "block"
    //     cssStar.style.display = "none"
    //     javascriptStar.style.display = "none"
    //     reactStar.style.display = "none"
    //   }else if( skill === cssStar){
    //     cssStar.style.display = "block"
    //    htmlStar.style.display = "none"
    //     javascriptStar.style.display = "none"
    //     reactStar.style.display = "none"
    //   }else if( skill === javascriptStar){
    //       javascriptStar.style.display = "block"
    //      cssStar.style.display = "none"
    //      htmlStar.style.display = "none"
    //     reactStar.style.display = "none"
    //   }else if(skill === reactStar){
    //           reactStar.style.display = "block"
    //     javascriptStar.style.display = "none"
    //      cssStar.style.display = "none"
    //    htmlStar.style.display = "none"
    //   }
    // }
    //
    // if(window.innerWidth > 1000){
    //
    //   html.addEventListener("mouseenter", function(){
    //
    //
    //       display(htmlStar)
    //
    //       html.addEventListener("mouseleave", function(){
    //           htmlStar.style.display = "none"
    //       })
    //
    //   })
    //    css.addEventListener("mouseenter", function(){
    //
    //         display(cssStar)
    //         css.addEventListener("mouseleave", function(){
    //           cssStar.style.display = "none"
    //       })
    //
    //   })
    //    javascript.addEventListener("mouseenter", function(){
    //
    //       display(javascriptStar)
    //         javascript.addEventListener("mouseleave", function(){
    //           javascriptStar.style.display = "none"
    //       })
    //
    //
    //   })
    //    react.addEventListener("mouseenter", function(){
    //
    //       display(reactStar)
    //
    //         react.addEventListener("mouseleave", function(){
    //           reactStar.style.display = "none"
    //       })
    //
    //
    //   })
    //
    // }

})
