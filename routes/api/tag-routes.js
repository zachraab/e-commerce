const router = require("express").Router();
const { Tag, Product } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    const findAllTags = await Tag.findAll({
      // include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(findAllTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const findByPkTag = await Tag.findByPk(req.params.id, {
      // include its associated Product data
      include: [{ model: Product }],
    });

    if (!findByPkTag) {
      res.status(404).json({ message: "No tag by this id was found" });
    }

    res.status(200).json(findByPkTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedTag) {
      res.status(404).json({ message: "Unable to update tag with this id" });
    }

    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (deletedTag) {
      res.status(200).json(deletedTag);
    } else {
      res.status(404).json({ message: "Could not delete tag with that ID" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
