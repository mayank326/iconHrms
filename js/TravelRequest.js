$(document).ready(function () {


    $("#submit").click(function () {

        var from = $('#fromPlace').val();
        var to = $('#toPlace').val();
        var stayOpt = $("#stayOption").find("option:selected").text();
        var reason = $("#travelPurpose").val();
        var startDate = $("#startDate").val();
        var returnDate = $("#returnDate").val();

      
        $('#onSubmit').modal('show');

    });


    $("#successSubmit").click(function () {

        document.location.href = "/home.html";
    });



});


