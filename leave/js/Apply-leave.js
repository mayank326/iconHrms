$(document).ready(function () {
    $("#firstDayResponse").hide();
    $("#secondDayResponse").hide();
    $("#alertMessage").hide();
   
    $('#onload').modal('show');
    var selectedText;
    
    $(".btn").click(function () {

        selectedText=$("#leave-type").find("option:selected").text();
        $(".selected-leave").text(selectedText);   
        
    });

    $("#firstDay").click(function () {
        if ($(this).is(":checked")) {
            $("#firstDayResponse").hide();
        } else {
            $("#firstDayResponse").show();
        }
    });
    
    $("#secondDay").click(function () {
        if ($(this).is(":checked")) {
            $("#secondDayResponse").hide();
        } else {
            $("#secondDayResponse").show();
        }
    });

    $("#submit").click(function () {
        $('#onSubmit').modal('show');

    });

    $("#successSubmit").click(function () {
        
        document.location.href = "/leave/View-leave.html";
    });

    
    $("#cancel").click(function () {

        document.location.href = "/leave/View-leave.html";
    });

    

});


$('#onload').modal({
    backdrop: 'static',
    keyboard: false
});



