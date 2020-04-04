var indOptions = {
    val1: 'Mobile Allowance',
    val2: 'Daily Allowance',
    val3: 'Extra Allowance',
    val4: 'Local Conveyance',
    val5: 'Guest House Expenses',
    val6: 'Outstation Expenses'
};

var singOptions = {
    val1: 'Medical Reimbursement',
    val2: 'Local Conveyance',
    val3: 'Daily Allowance',
    val4: 'Foreign Travel Expenses',
    val5: 'Special Approval',
    val6: 'Mobile Allowance',
    Val7: 'Food Allowance'
};

$(document).ready(function () {


    var user='IND'//indian employee or singapore employee

    $('#onload').modal('show');
    $('.oustation-exp').hide();

    var mySelect = $('#claim-type');

    if (user == 'IND') {
        $.each(indOptions, function (val, text) {
            mySelect.append(
                $('<option></option>').val(val).html(text)
            );
        });


    }
    if (user == 'SG') {
        $.each(singOptions, function (val, text) {
            mySelect.append(
                $('<option></option>').val(val).html(text)
            );
        });
    }

    var selectedText;
    $(".btn").click(function () {

        selectedText = $("#claim-type").find("option:selected").text();
        $(".selected-claim").text(selectedText);

        if (selectedText == 'Mobile Allowance') {
            $('.forDays').hide();
        }


        if (selectedText == 'Outstation Expenses') {
            $('.oustation-exp').show();
        }
    });


    $("#submit").click(function () {

        //Get values of field though this alert message
       // alert('' + $('.selected-claim').val() + ' : ' + $("#month").find("option:selected").text() + ' : ' + $('#client-name').val() + ' : ' + $("#currency").find("option:selected").text() + ' : ' + $('#amount').val() + ' : ' + $('#days').val());

    });


});

$('#onload').modal({
    backdrop: 'static',
    keyboard: false
});
