$(function () {
    $("#alertbox").hide();
    $("#getAlert").click(function () {
        var stop = $("#stop").val();
        $.ajax(
           {
               url: "http://realtime.mbta.com/developer/api/v2/alertheadersbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=" + stop + "&include_access_alerts=true&include_service_alerts=true&format=json",
               dataType: "json",
               success: renderInfo,
               error: errorMessage
           });
    });
});

function renderInfo(data) {
    var alert = "";
    $(".displayAlert").empty();

    console.log(alert);
    for (var i = 0; i < data.alert_headers.length; i++) {

        alert = data.alert_headers[i].header_text;
        console.log(alert);
        $(".displayAlert").append(alert);
        $("#alertMessage").hide();
        $("#alertbox").show();

    }
}

function errorMessage() {
    $(".displayAlert").empty();
    if ($("#stop").val().length > 0) {
        $(".displayAlert").append("No Updates Available for this stop :(")
        $("#alertMessage").hide();
        $("#alertbox").show();
    } else {
        $("#alertMessage").show();
        $("#alertMessage").text("Please enter the T-stop name.")
        
        $("#alertbox").hide();
    }

}