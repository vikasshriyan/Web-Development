$(document).ready(function () {
    $("#map-div").hide();
    $("#timings-div").hide();
    $("#alerts").click(function () {
        $("#alert-div-main").show();
        $("#map-div").hide();
        $("#timings-div").hide();
    });
    $("#directions").click(function () {
        $("#alert-div-main").hide();
        $("#timings-div").hide();
        $("#map-div").show();
    });
    $("#timings").click(function () {
        $("#alert-div-main").hide();
        $("#map-div").hide();
        $("#timings-div").show();
    });
});