$(init);
function init() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    $('#drag-me').draggable(); // drag all over the page
    $('#drag-me-hor').draggable({ axis: "x" }); // drag horizontally on x-axis
    $('#drag-me-ver').draggable({ axis: "y" }); // drag vertically on y-axis
    $('#drag-me-grid').draggable({ grid: [25, 25] });
}

function allOver(obj) {
    var p = $(obj);
    var position = p.position();
    var pos = "Left Spacing : " + position.left + "px" + "<br/>Top Spacing : " + position.top + "px";
    $("#drag-me-allOver").empty().append(pos);
}
function Hor(obj) {
    var p = $(obj);
    var position = p.position();
    var pos = "Left Spacing : " + position.left + "px" + "<br/>Top Spacing : " + position.top + "px";
    $("#drag-me-Hor").empty().append(pos);
}
function Ver(obj) {
    var p = $(obj);
    var position = p.position();
    var pos = "Left Spacing : " + position.left + "px" + "<br/>Top Spacing : " + position.top + "px";
    $("#drag-me-Ver").empty().append(pos);
}
function Grid(obj) {
    var p = $(obj);
    var position = p.position();
    var pos = "Left Spacing : " + position.left + "px" + "<br/>Top Spacing : " + position.top + "px";
    $("#drag-me-Grid").empty().append(pos);
}