$(document).on("ready", () => {
    // Create POST request to database with new url entry and random shortcode
    $("#urlFormRandom").on("submit", e => {
        e.preventDefault();
        // let urlData = $(this).data
        // let shortUrls = urlData.map(url => {
        //     url.short
        // })
        // console.log(urlData);
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
        let newEntryRandom = {
            url: $("#longUrlRandom").val(),
            short: newShortcode
        };

        console.log(newEntryRandom);

        $.ajax("/newUrl", {
            type: "POST",
            data: newEntryRandom
        }).then(
            () => {
                location.reload();
            }
        );
    });

    // Create POST request to database with new url entry and user generated shortcode
    $("#urlFormUser").on("submit", e => {
        e.preventDefault();
        let newEntryUser = {
            url: $("#longUrlUser").val(),
            short: $("#shortcodeUser").val()
        };
        console.log(newEntryUser);


        $.ajax("/newUrl", {
            type: "POST",
            data: newEntryUser
        }).then(
            () => {
                location.reload();
            }
        );
    });
})