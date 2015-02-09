$(document).ready(function () {

    $(".CSS1").click(function () {
        $(this).css({
            "background-color": "blue",
            "color":"white",
            "font-style": "italic",
            "fontFamily": "Impact,Charcoal,sans-serif"
        })
    });

    $(".CSS2").click(function () {
        $(this).css({
            "background-color": "red",
            "font-style": "bold",
            "fontFamily": "Courier New"
        })
    });

    $(".CSS3").click(function () {
        $(".CSS3").css({
            "background-image": 'url("http://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg")',
            "width": "210px",
            "height": "210px",
            "font-size": "0"
        })
    });

    $(".CSS4").click(function () {
        $(".CSS4").css({
            "background-image": 'url("http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg")',
            "width": "322px",
            "height": "379px",
            "font-size": "0"
        })
    });

    $('#refresh').click(function () {
        location.reload();
    });
});