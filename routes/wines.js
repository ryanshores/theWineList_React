const express = require("express")
const router = express.Router()
const Wines = require("../models").Wine

router.route("/")
.get((req, res) => {
  // get all wines
  Wines.find({})
  .then(wines => {
    return res.json(wines)
  })
  .catch(err => {
    res.send(err)
  })
})
.post((req, res) => {
  // post a new wine
  let wine = req.body
  Wines.create(wine)
  .then(newWine => {
    return res.json(newWine)
  })
  .catch(err => {
    res.send(err)
  })
})

router.route("/:id")
.get((req, res) => {
  // get wine
  Wines.findById(req.params.id)
  .then(wine => {
    return res.json(wine)
  })
  .catch(err => {
    res.send(err)
  })
})
.put((req, res) => {
  // update wine
  let wine = req.body
  Wines.findByIdAndUpdate(req.params.id, wine, {new: true})
  .then(updatedWine => {
    return res.json({messaege: "Updated wine", updatedWine})
  })
  .catch(err => {
    res.send(err)
  })
})
.delete((req, res) => {
  // delete wine
  let id = req.params.id;
	Wine.remove({_id: wineId})
	.then(result => {
		return res.json({message: "Removed wine", result});
	})
	.catch(err => {
		res.send(err);
	});
})
