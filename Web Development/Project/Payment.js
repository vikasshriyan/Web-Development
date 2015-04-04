$(function () {
    var url = "http://www.google.com";
    $("#submit").click(function () {
        if ($("#name_on_card").val() == "" || $("#card_number").val() == "" || $("#zip_code").val() == "" || $("#cvv").val() == "" || $("#year").val() == "Expiration year" || $("#month").val() == "Expiration month") {
            $("#payment_message").html("Please enter details of this field");
            $("#payment_message1").html("Please enter details of this field");
            $("#payment_message2").html("Please enter details of this field");
            $("#payment_message3").html("Please enter details of this field");
        }
        else {
            location.href = url;
        }
    });
});