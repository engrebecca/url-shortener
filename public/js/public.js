$(document).on("ready", () => {
    // Create POST request to database with new url entry and shortcode
    $("#urlFormRandom").on("submit", e => {
        e.preventDefault();
        let urlData = $(this).data
        // let shortUrls = urlData.map(url => {
        //     url.short
        // })
        console.log(urlData);
        // If a user's shortcode is available, add to the database
        // let newEntry = {
        //     url: $("#longUrl").val(),
        //     short: $("#shortcode").val()
        // };
        // If a user's shortcode is not available, return error message

        // If a user doesn't specify a shortcode, create a random shortcode
        let newShortcode = "";
        function generateShortcode() {
            console.log("Generating code")
            const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            for (let i = 0; i < 6; i++) {
                newShortcode += characters[Math.floor(Math.random() * 62)]
            }
            console.log(newShortcode);
        }
        generateShortcode();
        let newEntry = {
            url: $("#longUrlRandom").val(),
            short: newShortcode
        };

        console.log(newEntry);
        $("#longUrlRandom").val("");
        $("#shortcodeRandom").val("");

        $.ajax("/newUrl", {
            type: "POST",
            data: newEntry
        }).then(
            () => {
                location.reload();
            }
        );
    });
    $("#urlFormUser").on("submit", e => {
        e.preventDefault();
        // let urlData = $(this).data
        // let shortUrls = urlData.map(url => {
        //     url.short
        // })
        // console.log(urlData);
        // If a user's shortcode is available, add to the database
        let newEntry = {
            url: $("#longUrlUser").val(),
            short: $("#shortcodeUser").val()
        };
        // If a user's shortcode is not available, return error message

        // If a user doesn't specify a shortcode, create a random shortcode
        // let newShortcode = "";
        // function generateShortcode() {
        //     console.log("Generating code")
        //     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        //     for (let i = 0; i < 6; i++) {
        //         newShortcode += characters[Math.floor(Math.random() * 62)]
        //     }
        //     console.log(newShortcode);
        // }
        // generateShortcode();
        // let newEntry = {
        //     url: $("#longUrl").val(),
        //     short: newShortcode
        // };

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
        );
    });
})