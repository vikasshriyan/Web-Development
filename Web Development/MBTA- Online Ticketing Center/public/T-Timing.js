$(function () {
    $("#timing-div").hide();
    var inbound = null;
    var outbound = null;
    var t_stops =
        {
            "Symphony": ["70241", "70242"],
            "Northeastern University": ["70243", "70244"],
            "Copley": ["70154", "70155"],
            "Arlington": ["70156", "70157"],
            "Boylston": ["70158", "70159"],
            "Park Street": ["70200"],
            "Haymarket": ["70204", "70205"],
            "North Station": ["70206", "70207"],
            "Science Park": ["70208", "70209"],
            "Lechmere": ["70210", "70211"],
            "Prudential": ["70239", "70241"],
            "Museum of Fine Arts": ["70245", "70246"],
            "Longwood Medical Area": ["70247", "70248"],
            "Brigham Circle": ["70249", "70250"],
            "Fenwood Road": ["70251", "70252"],
            "Mission Park": ["70253", "70254"],
            "Riverway": ["70255", "70256"],
            "Back of the Hill Station": ["70257", "70258"],
            "Heath Street": ["70260"],
            "Boston College": ["70106","70107"],
            "South Street": ["70110","70111"],
            "Chestnut Hill Ave.": ["70112", "70113"],
            "Chiswick Road": ["70114", "70115"],
            "Sutherland Road": ["70116", "70117"],
            "Washington Street": ["70120", "70121"],
            "Warren Street": ["70124", "70125"],
            "Allston Street": ["70126", "70127"],
            "Griggs Street": ["70128", "70129"],
            "Harvard Avenue": ["70130", "70131"],
            "Packards Corner": ["70134", "70135"],
            "Babcock Street": ["70136", "70137"],
            "Pleasant Street": ["70138", "70139"],
            "Saint Paul Street": ["70140", "70141"],
            "Boston University West": ["70142", "70143"],
            "Boston University Central": ["70144", "70145"],
            "Boston University East": ["70146", "70147"],
            "Blandford Street": ["70148", "70149"],
            "Kenmore": ["70150", "70151"],
            "Hynes Convention Center": ["70152", "70153"],
            "Riverside": ["70161", "70162"],
            "Woodland": ["70163", "70164"],
            "Waban": ["70165", "70166"],
            "Eliot": ["70167", "70168"],
            "Newton Highlands": ["70169", "70170"],

            "Newton Center": ["70171", "70172"],
            "Chestnut Hill": ["70173", "70174"],
            "Reservoir": ["70174", "70175"],
            "Beaconsfield": ["70176", "70177"],
            "Brookline Hills": ["70178", "70179"],
            "Brookline Village": ["70180", "70181"],
            "Longwood": ["70182", "70183"],
            "Fenway": ["70186", "70187"],
            "Saint Mary Street": ["70211", "70212"],
            "Hawes Street": ["70213", "70214"],
            "Kent Street": ["70215", "70216"],
            "Coolidge Corner": ["70219", "70220"],
            "Summit Avenue": ["70223", "70224"],
            "Brandon Hall": ["70225", "70226"],
            "Fairbanks Street": ["70227", "70228"],
            "Washington Square": ["70229", "70230"],
            "Tappan Street": ["70231", "70232"],
            "Dean Road": ["70233", "70234"],
            "Englewood Avenue": ["70235", "70236"],
            "Cleveland Circle": ["70237", "70238"],
            // Orange line starts here 
            "Forest Hills": ["70001"],
            "Green Street": ["70002", "70003"],
            "Stony Brook": ["70004", "70005"],
            "Jackson Square": ["70006", "70007"],
            "Roxbury Crossing": ["70008", "70009"],
            "Ruggles": ["70010", "70011"],
            "Massachusetts Avenue": ["70012", "70013"],
            "Back Bay": ["70014", "70015"],
            "Tufts Medical Center": ["70016", "70017"],
            "ChinaTown": ["70018", "70019"],
            "Downtown Crossing": ["70020", "70021"],
            "State-Orange Line": ["70022", "70023"],
            "Haymarket-Orange Line": ["70024", "70025"],
            "North Station": ["70026", "70027"],
            "Community College": ["70028", "70029"],
            "Sullivan Square": ["70030", "70031"],
            "Wellington Station": ["70032", "70033"],
            "Malden Center": ["70034", "70035"],
            "Oak Grove": ["70036", "70037"],
            "Assembly": ["70278"],
            // Red line starts here 
            "Alewife": ["70061,70062"],
            "Davis": ["70063", "70064"],
            "Porter": ["70065", "70066"],
            "Harvard": ["70067", "70068"],
            "Central": ["70069", "70070"],
            "Kendall/MIT": ["70071", "70072"],
            "Charles/MGH": ["70073", "70074"],
            "Park Street-Red Line": ["70075", "70076"],
            "Downtown Crossing-Red Line": ["70077", "70078"],
            "South Station": ["70079", "70080"],
            "Broadway": ["70081", "70082"],
            "Andrew": ["70083", "70084"],
            "Savin Hill": ["70087", "70088"],
            "Fields Corner": ["70089", "70090"],
            "Shawmut": ["70091", "70092"],
            "Ashmont": ["70093", "70094"],
            "JFK/UMass": ["70095", "70096"],
            "North Quincy": ["70097", "70098"],
            "Wollaston": ["70099", "70100"],
            "Quincy Center": ["70101","70102"],
            "Quincy Adams": ["70103","70104"],
            "Quincy Braintree": ["70105"],
            // Blue Line starts here
            "Bowdoin": ["70038"],
            "State Street-Blue LIne": ["70041", "70042"],
            "Aquarium": ["70043", "70044"],
            "Maverick": ["70045", "70046"],
            "Airport": ["70047", "70048"],
            "Wood Island": ["70049", "70050"],
            "Orient Heights": ["70051", "70052"],
            "Suffolk Downs": ["70053", "70054"],
            "Beachmount": ["70055", "70056"],
            "Revere Beach": ["70057", "70058"],
            "Wonderland": ["70060"]
        };
    var keys = Object.keys(t_stops);

    $("#timing-stop").autocomplete({
        source : keys
    });
  
    $("#getTiming").click(function () {
        var stop = $("#timing-stop").val();
        for (var i = 0; i < keys.length; i++) {
            if (stop == keys[i]) {
                var outbound = t_stops[keys[i]][0];
                var inbound = t_stops[keys[i]][1];
            }
        }

        $.ajax({
            url: "http://realtime.mbta.com/developer/api/v2/schedulebystop?api_key=XC0_VoTK-kqFJxLSHpmvSw&stop=" + outbound + "&format=json",
            success: renderOutboundInfo

        });
        $.ajax({
            url: "http://realtime.mbta.com/developer/api/v2/schedulebystop?api_key=XC0_VoTK-kqFJxLSHpmvSw&stop=" + inbound + "&format=json",
            success: renderInboundInfo

        });
        $("#timing-div").show();
    });
    
    function renderInboundInfo(data) {
        var z = data.mode[0].route[0].direction[0].trip;
        var tripname = null;
        for (var i = 0; i <= z.length; i++) {
            tripname = z[0].trip_name;
            var arrival_time = z[0].sch_arr_dt;          
            var myDate = new Date(arrival_time * 1000);
            arrival_time = myDate.toLocaleString();
            arrival_time = arrival_time.substring(10,16) + ' ' + arrival_time.substring(19, 21);
        }
        tripname = tripname.replace(tripname.substring(0, 7), arrival_time);
        
        $("#timingMessageOutbound").html(tripname);
    }

    function renderOutboundInfo(data) {
        var z = data.mode[0].route[0].direction[0].trip;
        var tripname = null;
        for (var i = 0; i <= z.length; i++) {
             tripname = z[0].trip_name;
            var arrival_time = z[0].sch_arr_dt;           
            var myDate = new Date(arrival_time * 1000);
            arrival_time = myDate.toLocaleString();
            arrival_time = arrival_time.substring(10, 16) + ' ' + arrival_time.substring(19, 21);
        }
        tripname = tripname.replace(tripname.substring(0,7), arrival_time);
        $("#timingMessageInbound").html(tripname);
    }

    $("#bookmarkTiming").click(function () {
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);
        console.log(user);

       // console.log(user.username);
        if (user.username == '') {
            return;
        }
        else {
            var stop = $("#timing-stop").val();
            console.log(stop);
            if (stop == '') {
                return;
            }
            else {
                var bookmark = {
                    username: user.username,
                    stop: stop
                }
                $.ajax({
                    type: 'POST',
                    data: bookmark,
                    url: '/bookmark',
                    success: function (data) {
                        console.log(data);
                    }
                });
            }
        }
    });
});