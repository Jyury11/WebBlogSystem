//----------------------------
// Router ： 記事
//----------------------------

//----------------------------
// require
//----------------------------
var router = require("express").Router();
var { CONNECTION_URL, OPTIONS, DATABSE } = require("../config/mongodb.config");
var MongoClient = require("mongodb").MongoClient;

//----------------------------
// 公開モジュール
//----------------------------
router.get("/*", (req, res) => {
    MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
        var db = client.db(DATABSE);
        db.collection("posts").findOne({
            url: req.url
        }).then((doc) => {
            res.render("./posts/index.ejs", doc);
        }).catch((error) => {
            throw error;
        }).then(() => {
            client.close();
        });
    });
});

//----------------------------
// exports
//----------------------------
module.exports = router;