const { validationResult } = require("express-validator");

let items = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Headphones" }
];

exports.getItems = (req, res) => {
  res.json(items);
};

exports.getItem = (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

exports.createItem = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = req.body.name;
  res.json(item);
};

exports.deleteItem = (req, res) => {
  const exists = items.some(i => i.id === parseInt(req.params.id));
  if (!exists) return res.status(404).json({ message: "Item not found" });

  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.json({ message: "Item deleted" });
};
