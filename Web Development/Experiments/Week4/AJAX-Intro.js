$(function () {
    $("#getActor").click(function () {
        var actor = $("#actor").val();
        $.ajax(
        {
            url: "http://www.myapifilms.com/imdb?name="+actor+"&format=JSONP&filmography=0&limit=1&lang=en-us&exactFilter=0&bornDied=0&starSign=0&uniqueName=0&actorActress=0&actorTrivia=0&actorPhotos=N&actorVideos=N&salary=0&spouses=0&tradeMark=0&personalQuotes=0",
            dataType: "jsonp",
            success: renderInfo
        });
    });
    
});

function renderInfo(actors)
{
    var parent = $("#actors");
    var template = parent.find(".template");
    parent.empty();
    for (var a in actors) {
          var actor = actors[a];
          console.log(actor);
          var dob = actor.dateOfBirth;
          console.log(dob);
          var b = actor.bio;
          console.log(b);
          var urlPhoto= actor.urlPhoto;
          var name = actor.name;
          var item = template.clone();
          item.find(".name").html(name);
          item.find(".bio").html(b);
          item.find(".dob").html(dob);
          item.find(".photo").attr("src", urlPhoto);
          parent.append(item);
     }
}
        