
      
            document.getElementById("tArea").innerHTML=localStorage.getItem("hello");
        
     
        function addTask(){            
            let =document.getElementById("tskin").value;
           document.getElementById("tArea").value += x;
           document.getElementById("tskin").value="";
           localStorage.setItem("hello",document.getElementById("tArea").value );
           
           
        }
        
        function clearTask(){
           
           document.getElementById("tArea").value="";
           
        }
    