$(document).ready(function () {
    initModal();
    // Modal window close button
    var ctx = document.getElementById('close').getContext('2d');
    ctx.beginPath();
    ctx.arc(12, 12, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.moveTo(8, 8);
    ctx.lineTo(16, 16);
    ctx.moveTo(16, 8);
    ctx.lineTo(8, 16);
    ctx.stroke();})// Javascript for modal window
function initModal() {
    $('.openModal').click(function () {
        $('.modal').fadeIn(200);
        $('body').addClass('overlay');
    });
    $('.close a').click(function () {
        $('.modal').fadeOut(200);
        $('body').removeClass('overlay')
    });
}