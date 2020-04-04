

$(document).ready(function () {

    $(".btn").click(function () {
        
        var username = $.trim($("#username").val());
        var password = $.trim($("#password").val());
       
        if (username != '' && password != '') {
            document.location.href = "home.html";
        }
        else {
            $('#onSubmit').modal('show');
        }
        
    });

    $("#successSubmit").click(function () {
        $('#onSubmit').modal('hide');
        
    });
});

