const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({ include: [
      { model: Product, through: { model: ProductTag }, as: 'products' },
    ]}
    );
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  console.log(res)
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {include: [
      { model: Product, through: { model: ProductTag }, as: 'products' },
    ]
    
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
      
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!updateTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.status(200).json({ message: 'Tag name updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update Tag name' });
  }
});



router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
