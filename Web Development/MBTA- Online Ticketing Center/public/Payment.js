$(function () {
    var url = "TicketPage.html";
    $("#submit").click(function () {
        if ($("#name_on_card").val() == "" || $("#card_number").val() == "" || $("#zip_code").val() == "" || $("#cvv").val() == "" || $("#year").val() == "Expiration year" || $("#month").val() == "Expiration month") {
            $("#payment_message").html("Please enter details of this field");
            $("#payment_message1").html("Please enter details of this field");
            $("#payment_message2").html("Please enter details of this field");
            $("#payment_message3").html("Please enter details of this field");
        }
        else {
            window.location.href = url;
        }
    });

    $("#logoutUser").click(function () {
        $.ajax({
            type: 'POST',
            url: '/logout',
            success: logoutUser
        });
    });

    function logoutUser() {
        var url = 'index.html';
        window.location.href = url;
    }

    var user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    console.log(user);

    $("#cancel_button").click(function () {
        $.ajax({
            type: 'DELETE',
            url: '/delete',
            data : user,
            success: function (data) {
                url = 'Profile.html';
                window.location.href=url;
            },
        });
    });
});