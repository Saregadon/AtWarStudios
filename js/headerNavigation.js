[document.getElementsByTagName("button")].forEach(function(item) {
    item.addEventListener('click', function() {
        obj[this.id]();
    })
})

var obj = {
    Home: function() {
        //change to actual website display
        window.location.href = "http://127.0.0.1:5500/homePage.html#Home"
    },
    Portfolio: function() {
        window.location.replace("http://127.0.0.1:5500/Portfolio.html");
    },
    Media: function() {
        //change to scroll to the media location at the footer
    },
    Info: function() {
        //change to scroll to the info location at the footer
    },
    Contact: function() {
        //change to scroll to the info location at the footer
    }
}