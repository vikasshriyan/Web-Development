$(function () {
    var dropdown1 = null;
    var dropdown2 = null;
    var passengers = null;
    var price = 0;
    var date = null;
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
        change: function (ev, ui) {
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
                $("#alertMessage").html("Source and Destination cannot be the same!");
            }
            else {
                $("#alertMessage").html("");
            }
        }
    });

    $(".dropdown-menu li a").click(function () {
        $(".bt").text($(this).text());
        $(".bt").val($(this).text());
        passengers = $("#dropdownMenu1").val();
        price = passengers * 2.50
        date = $("#date").val();
        console.log(dropdown1);
        console.log(passengers);
        console.log(price);
        console.log(date);
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);
        var ticketDetails = {
            username:user.username,
            source: dropdown1,
            destination: dropdown2,
            date: date,
            price: price,
        };
        
        localStorage.setItem('currentUserTicketDetail', JSON.stringify(ticketDetails));
        $("#ticketPrice").html(passengers + " x 2.50" + " = " + price + "$");
        $("#paymentButton").click(function () {
            if (dropdown1 == null || dropdown2 == null || passengers == null || date == '') {
                $("#paymentError").html("Please fill the above details");
                $("#paymentError1").html("Please fill the above details");
            }
            else {
                $.ajax({
                    type: 'PUT',
                    data: ticketDetails,
                    url: '/ticket',
                    success: function () {
                        var url = 'Payment.html';
                        window.location.href = url;
                    }
                });
            }
        })
    });
    
    $("#logoutUser").click(function () {
        $.ajax({
            type: 'POST',
            url: '/logout',
            success: logoutUser
        });
    });

    function logoutUser() {
        var url = 'index.html'
        window.location.href = url;
    }
});


