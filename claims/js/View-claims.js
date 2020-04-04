
$(document).ready(function () {


    $('#onload').modal('show');

    var selectedText;
    $(".btn").click(function () {

        selectedText = $("#month").find("option:selected").text();
        $(".selected-month").text(selectedText);

        generateCard();
    });

});

$('#onload').modal({
    backdrop: 'static',
    keyboard: false
});



var generateCard = function () {
    for (var i = 1; i <= 5; i++) {
        var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="card card-outline-info"> <div class="card-block"><div class="card-title">Client Travelling' + i + '</div><hr><p><span>Start Date : </span>' + i + ' </p><p><span>End Date : </span>' + i + ' </p><p>Ammount : ' + i + '</p><p>Status : ' + 'Approved' + '</p><p>Attachments : ' + 'No' + '</p></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    }
};
