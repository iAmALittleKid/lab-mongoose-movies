const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")

router.get("/celebrities", (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
      res.render("celebrities/index", {celebrities: celebrities})
    })
  });

router.get("/celebrities/:celebrityId", (req, res, next) => {

  Celebrity.findById(req.params.celebrityId)
    .then(celebrityFromDb => {
      res.render("celebrities/show", {
        Celebrity: celebrityFromDb
      })
    })
})

module.exports = router;