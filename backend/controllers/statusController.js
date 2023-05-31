const Status = require("../models/Status");

const StatusController = {
  getAllStatus: async (req, res) => {
    try {
      const status = await Status.find();
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addNewStatus: async (req, res) => {
    try {
      const newStatus = new Status({
        name: req.body.name,
        about: req.body.about,
        description: req.body.description,
      });
      const status = await newStatus.save();
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getBasicStatus: async (req, res) => {
    try {
      const status = await Status.find();
      res.status(200).json(status.map(s => ({name: s.name, about: s.about})))
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getStatusByName: async (req, res) => {
    try {
      const status = await Status.findOne({name: req.body.name});
      res.status(200).json(status);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = StatusController;
