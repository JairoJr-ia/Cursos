const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://lh3.googleusercontent.com/-ef3dZdrBXlE/XdMlVPHsH_I/AAAAAAAADmI/eotUlsHtYdc10evUAsInzHV0lcITVuHSwCEwYBhgL/w140-h139-p/20190418_173525_capture%25280%2529.jpg",
        name: "Jairo Jr",
        role: "Programador Delphi",
        description: 'Entusiasta da programação JS, com uma base sólida em <a href="https://www.embarcadero.com/br/" target="_blank">Delphi</a>',
        links: [
            { name: "Github", url: "https://github.com/jairo-jr-hub" },
            { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100009845624953" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/jairo-antonio-b82ab4101/" },

        ]
    }


    return res.render("about", { about })
})

server.get("/portifolio", function (req, res) {

    return res.render("portifolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        return video.id == id

    })

    if (!video) {
        return res.send("Video not found")
    }

    return res.render("video", { item: video })

})

server.listen(5000, function () {
    console.log("Server is running")
})