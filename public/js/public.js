$(document).on("ready", () => {
    // Create POST request to database with new url entry and shortcode
    $("#urlForm").on("submit", e => {
        e.preventDefault();
        // If a user's shortcode is available, add to the database
        // If a user's shortcode is not available, return error message
        // If a user doesn't specify a shortcode, create a random shortcode
        let newEntry = {
            url: $("#longUrl").val(),
            short: $("#shortcode").val()
        };
        console.log(newEntry);
        $("#longUrl").val("");
        $("#shortcode").val("");

        $.ajax("/newUrl", {
            type: "POST",
            data: newEntry
        }).then(
            () => {
                location.reload();
            }
        )
    })
})