

function dark() {
   let currentmode = document.getElementById("dark").getAttribute("src")
   if (currentmode =="icons/lightmode.png"){
        document.getElementById("dark").setAttribute("src", "icons/darkmode.png");
   }else {
        document.getElementById("dark").setAttribute("src", "icons/lightmode.png");
   }
   var elements = document.getElementsByTagName("*");
   
    for (let x = 0; x < elements.length; x++){
        //grab element from array 
        let element = elements[x]

        //grab element's CSS values using built-in function
        let elementStyle = getComputedStyle(element)    //Beware! this variable is a only place holder for an element's CSS values.
                                                        //Changing its values directly (elementStyle.color = black) wont have any affect on the element itself!

        console.log(element.tagName)
        console.log(elementStyle.color)
        console.log(elementStyle.backgroundColor)

        //how to CHECK a CSS value on an element
        //if (elementStyle.color == "black") {} RIGHT
        //if (element.style.color == "black") {} WRONG (This is how we were doing it yesterday.)
        
        //how to CHANGE a CSS value on an element
        // element.style.color = "black"   RIGHT
        // elementStyle.color = "black"    WRONG


    }

    
}

