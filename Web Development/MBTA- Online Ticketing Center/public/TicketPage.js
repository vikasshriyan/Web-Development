$(function () {
    $("#back_button").click(function () {
        var url = "Profile.html";
        window.location.href = url;
    });
    var currentUserTicketDetail = localStorage.getItem('currentUserTicketDetail');
    var user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    currentUserTicketDetail = JSON.parse(currentUserTicketDetail);
    console.log(currentUserTicketDetail);
    console.log(user);
    var nop = currentUserTicketDetail.price / 2.50;
    $("#name-p").html(user.firstName + " " + user.lastName);
    $("#doj-p").html(currentUserTicketDetail.date);
    $("#source-p").html(currentUserTicketDetail.source);
    $("#dest-p").html(currentUserTicketDetail.destination);
    $("#nop-p").html(nop);
    $("#ticket-price-p").html(currentUserTicketDetail.price + "$");
});