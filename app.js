const functions = require("./function")

const express = require("express");
const path = require("path");

const port = 3000;

const app = express();
app.set("view engine","hbs")

app.use('/assets',express.static(path.join(__dirname,"./assets")));
app.use('/js',express.static(path.join(__dirname,"./js")));


const proba () => {
    return 'proba'
}

app.get("/", function (req,res){
    res.render("index", {
        title: "Zajęcia 07.02.2021",
        subTitle: functions.subTitle
        subsubTitle: proba()
    });
})
app.get("/about", function (req,res){
    res.send("Strona o nas");
})

app.listen(port,(err)=>{
    if (err) { return console.log(err)}
    console.log(`Apka działa na porcie ${port}`)
})