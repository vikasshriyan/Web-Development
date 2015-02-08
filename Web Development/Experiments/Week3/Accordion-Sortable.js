$(function () {
    $("#accordion")
      .accordion({
          header: "> div > h3"
      })
      .sortable({
          axis: "y",
          handle: "h3",
          stop: function (event, ui) {
              $(this).accordion("refresh");
          }
      });
});