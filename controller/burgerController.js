var express = require("express");
var router = express.Router(); 
var db = require("../models");





router.get("/", function(req, res){
  db.burger.findAll({}).then(function(data){
console.log("This data is...");
res.render("index", {burger_data: data});
  });
});



router.post("/api/burgers", function (req, res) {
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function (result) {
    // Send back the ID of the new quote
    res.json({
      id: result.insertId
    });
  });
});
router.put("/api/burgers/:id", function (req, res) {
  
    db.burger.update(
       {devoured: true},
       {where: {id:req.params.id}}
     )
     .then(function(rowsUpdated) {
       res.json(rowsUpdated)
     })
  
});
router.put("/api/delBurgers/:id", function (req, res) {
  // var condition = "id = " + req.params.id;
  db.burger.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (rowDeleted) { // rowDeleted will return number of rows deleted
      if (rowDeleted === 1) {
        console.log('Deleted successfully');
        res.json(rowDeleted)
      }
    }, function (err) {
      console.log(err);
    });
});
// Export routes for server.js to use.
module.exports = router;


// router.post("/burgers/update", function(req,res){
//  console.log(req.body.burger_id);

//   burger.update(req.body.burger_id, function(result){
//     console.log(result);
//     res.sendStatus(200);
//   });
// });

// router.post('/burgers/create', function(req,res){
//   burger.create(req.body.burger_name, function(result){
//     res.redirect('/');
//   })
// })

// router.get("/", function(req,res){
//   burger.all(function(burger_data){
//     console.log(burger_data);
//     res.render("index", {burger_data});
//   })
 
// })

// module.exports = router;