$(document).ready(function () {

    
    $("#submit").click(function () {

        var selectedText = $("#department").find("option:selected").text();
        var desc = $("#problem-desc").val();

        var dNow = new Date();
        var localdate = (dNow.getDate() + dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
        
        //store localdate variable in db to know query raised time

        $('#onSubmit').modal('show');

    });


    $("#successSubmit").click(function () {

        document.location.href = "/home.html";
    });



});


