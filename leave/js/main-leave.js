
$(document).ready(function () {

 
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    
    var span = document.getElementsByClassName("close")[0];

    
    span.onclick = function () {
        modal.style.display = "none";
        document.location.href = "/home.html";
    }

    

    

});