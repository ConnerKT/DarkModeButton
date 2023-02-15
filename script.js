

function dark() {
   let currentmode = document.getElementById("dark").getAttribute("src")
   if (currentmode =="icons/lightmode.png"){
        document.getElementById("dark").setAttribute("src", "icons/darkmode.png");
   }else {
        document.getElementById("dark").setAttribute("src", "icons/lightmode.png");
   }
   var elements = document.body.getElementsByTagName("*");
   console.log(elements)
    for (let x = 0; x < elements.length; x++){
        let element = elements[x]
        if (element.tagName == "HEADER"){
            
            let color = element.style.color
             console.log(element.style.color)
             console.log(document.getElementsByTagName("header"))
            if (color == "white"){
                elements.style.color=("black");
            }
        }
        
        
            

    }

    
}

