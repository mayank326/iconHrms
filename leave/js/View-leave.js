$(document).ready(function () {

    $(".alloted-leave").text("2");
    $(".current-balance").text("3");

    generateCard();
});


var generateCard = function () {
    for (var i = 1; i <= 5; i++) {
        var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="card card-outline-info"> <div class="card-block"><div class="card-title">L00' + i + '</div><hr><p><span>Start Date : </span>' + i + ' </p><p><span>End Date : </span>' + i + ' </p><p>Number Of Days : ' +i+'</p><p>Status : '+'Approved'+ '</p></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    }
};
