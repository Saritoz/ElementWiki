const {
  getAllElements,
  addNewElement,
  getBasisInfoElements,
  getElementByName,
} = require("../controllers/elementController");

const router = require("express").Router();

router.get("/getall", getAllElements);
router.post("/add", addNewElement);
router.get("/getbasic", getBasisInfoElements);
router.post("/getelement", getElementByName);

module.exports = router;
