

$(document).ready(function () {

  
    generateCard();
    return false;

});


var generateCard = function () {
    for (var i = 1; i <= 5; i++) {
        var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="card card-outline-info"> <div class="card-block"><div class="card-title">Ticket Code-' + i + '</div><p><span class="time-text">27/3/2020 18:30 </span> </p><p><span class="domain-text">Functional Domain : </span>' + 'Finance' + ' </p><p><span class="query-text">Query : </span>' + 'Reason '+i + ' </p></div></div>');
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentPanel');
    }
};
