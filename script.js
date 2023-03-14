

function dark() {
   let currentmode = document.getElementById("dark").getAttribute("src")
   if (currentmode =="icons/lightmode.png"){
        document.getElementById("dark").setAttribute("src", "icons/darkmode.png");
   }else {
        document.getElementById("dark").setAttribute("src", "icons/lightmode.png");
   }
   var elements = document.getElementsByTagName("*");
   var header = document.getElementsByTagName("header")[0];
   var bgcolor = document.body

//    h1tag = document.getElementsByTagName("H1")
//    while (elements === h1tag){
//         if (getComputedStyle.h1tag === rgb(0, 0, 0)){
//             return;
//         }else if (getComputedStyle.h1tag === rgb(255, 255, 255)){
//             return;
//         }
//     h1tag.style.color = rgb(0, 0, 0)
        
  // }    
    for (let x = 0; x < elements.length; x++){
        //grab element from array 
        let element = elements[x]

        //grab element's CSS values using built-in function
        let elementStyle = getComputedStyle(element)    //Beware! this variable is a only place holder for an element's CSS values.
       
        if (element.tagName === "H1"){
            if (elementStyle.color === "rgb(0, 0, 0)"){
                break;
            }else if (elementStyle.color === "rgb(255, 255, 255)"){
                break;
            }else if (elementStyle.color === ""){
                element.style.color = "rgb(0, 0, 0)"
            }
        break;
        }
        

        if(element.tagName == "H1"){
            console.log("tagname",element.tagName)
            console.log("color",elementStyle.color)
            console.log("bgoclor",elementStyle.backgroundColor)
            console.log("==============BEFORE CHANGE=================")
        }

        // if (element === "H1"){
        //     if ("H1" === "rgb(0, 0, 0)"){
        //         return;
        //     }else
        //     element.style.color ="rgb(255, 255, 255)"
        // }
        if (elementStyle.color === "rgb(0, 0, 0)") {
            element.style.color = "rgb(255, 255, 255)";
        }else if(elementStyle.color === "rgb(255, 255, 255)"){
            element.style.color = "rgb(0, 0, 0)";
        }
        if (elementStyle.backgroundColor === "rgb(0, 0, 0)"){
            element.style.backgroundColor = "rgb(255, 255, 255)";
        }else if(elementStyle.backgroundColor === "rgb(255, 255, 255)"){
            element.style.backgroundColor = "rgb(0, 0, 0)";
        }

        
        if(element.tagName == "H1"){
            console.log("tagname",element.tagName)
            console.log("color",elementStyle.color)
            console.log("bgoclor",elementStyle.backgroundColor)
            console.log("==============AFTER CHANGE=================")
        }
                                           //Changing its values directly (elementStyle.color = black) wont have any affect on the element itself! 

        //how to CHECK a CSS value on an element
        //if (elementStyle.color == "black") {} RIGHT
        //if (element.style.color == "black") {} WRONG (This is how we were doing it yesterday.)
        
        //how to CHANGE a CSS value on an element
        // element.style.color = "black"   RIGHT
        // elementStyle.color = "black"    WRONG


    }

    
}

