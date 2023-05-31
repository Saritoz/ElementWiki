const {
  getAllStatus,
  addNewStatus,
  getBasicStatus,
  getStatusByName,
} = require("../controllers/statusController");

const router = require("express").Router();

router.get("/getall", getAllStatus);
router.post("/add", addNewStatus);
router.get("/getbasic", getBasicStatus);
router.post("/getstatus", getStatusByName);

module.exports = router;
