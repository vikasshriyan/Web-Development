$(function () {
    var dropdown1 = null;
    var dropdown2 = null;
    var tstops = [
      "Boston College",
      "South Street",
      "Chestnut Hill Avenue",
      "Chiswick Road",
      "Sutherland Road",
      "Washington Street",
      "Allston Street",
      "Warren Street",
      "Griggs Street",
      "Harvard Avenue",
      "Packards Corner",
      "Babcock Street",
      "Pleasant Street",
      "St. Paul Street",
      "BU West",
      "BU Central",
      "BU East",
      "Blandford Street",
      "Hynes Convention Center",
      "Copley",
      "Park Street",
      "Haymarket",
      "North Station",
      "Science Park/West End",
      "Lechmere",
      "Arlington",
      "Boylston",
      "Kenmore",
      "Prudential",
      "Symphony", "Northeastern University", "Museum of Fine Arts", "Longwood Medical Area", "Brigham Circle", "Fenwood Road", "Mission Park", "Riverway", "Back of the hill", "Health Street", "Fenway", "Longwood", "Brookline Village", "Brookline Hills", "Beaconsfield", "Reservoir", "Chestnut Hill", "Newton Center", "Newton Highlands", "Eliot", "Waban", "Woodland", "Riverside",
      "St. Marys Street", "Hawes Street", "Kent Street", "Coolidge Corner", "Summit Avenue", "Brandon Hall", "Fairbanks Street", "Washington Square", "Tappan Street", "Dean Road", "Englewood Avenue", "Cleveland Circle",
      "Forest Hills", "Green Street", "Stony Brook", "Jackson Square", "Roxbury Crossing", "Ruggles", "Mass. Avenue", "Back Bay", "Tufts Medical Center", "Chinatown", "Downtown Crossing", "State", "Community College", "Sullivan Square", "Assembly", "Wellington", "Malden Center", "Oak Grove",
      "Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Charles/MGH", "Broadway", "Andrew", "JFK/UMASS", "Savin Hill", "Fields Corner", "Shawmut", "Ashmont", "Cedar Grove", "Butler", "Milton", "Central Avenue", "Valley Road", "Capen Street", "Mattapan", "North Quincy", "Wollaston", "Quincy Center", "Quincy Adams", "Braintree",
      "Bowdoin", "Central Wharf", "Airport", "Maverick", "Wood Island", "Orient Heights", "Suffolk Downs", "Beachmount", "Revere Beach", "Wonderland"
    ];
    $("#stops1").autocomplete({
        source: tstops,
        change: function(ev, ui){
            dropdown1 = ui.item.label;
            console.log(dropdown1);
        }
    });
    

    $("#stops2").autocomplete({
        source: tstops,
        change: function (ev, ui) {
            dropdown2 = ui.item.label;
            console.log(dropdown2);
            if (dropdown1 == dropdown2) {
                $("#source_destinations_equal").html("Source and Destination cannot be the same!");
            }
            else {
                $("#source_destinations_equal").hide();
                $("#alertMessage").html("");
            }
        }
    });
});



$(function () {
    $(".dropdown-menu li a").click(function () {
        $(".bt").text($(this).text());
        $(".bt").val($(this).text());
        var passengers = $("#dropdownMenu1").val();
        console.log(passengers);
        $("#ticketPrice").html(passengers + " x 2.50" + " = " + passengers * 2.50 + "$");
    });
});


