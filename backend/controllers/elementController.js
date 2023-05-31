const Elements = require("../models/Elements");

const elementController = {
  getAllElements: async (req, res) => {
    try {
      const elements = await Elements.find();
      res.status(200).json(elements);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addNewElement: async (req, res) => {
    try {
      const newElement = new Elements({
        name: req.body.name,
        about: req.body.about,
        weakness: req.body.weakness,
        stronger: req.body.stronger,
        description: req.body.description,
        abilities: req.body.abilities,
        enemies: req.body.enemies,
        summon: req.body.summon,
        color: req.body.color,
      });
      const user = await newElement.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getBasisInfoElements: async (req, res) => {
    try {
      const elements = await Elements.find();
      res.status(200).json(
        elements.map((e) => ({
          name: e.name,
          about: e.about,
          color: e.color,
        }))
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getElementByName: async (req, res) => {
    try {
      const element = await Elements.findOne({ name: req.body.name });
      res.status(200).json(element);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = elementController;
