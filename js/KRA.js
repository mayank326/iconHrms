

$(document).ready(function () {

    /* $(".appraisal-name").text("KRA-190470");
    $(".appraisal-cycle").text("Apr-Sept");
    $(".appraisal-year").text("2019");
    */

    generateCard();
    return false;

});


var generateCard = function () {
    for (var i = 1; i <= 5; i++) {
        var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="card card-outline-info"> <div class="card-block"><div class="card-title">KRA-' + i + '</div><p><span class="cycle-text">KRA Cycle : </span>' + i + ' </p><p><span class="year-text">KRA Year : </span>' + i + ' </p></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    }
};
