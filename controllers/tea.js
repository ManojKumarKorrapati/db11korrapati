var tea = require("../models/tea");

// List of all teas
exports.tea_list = function (req, res) {
  res.send("NOT IMPLEMENTED: tea list");
};

// for a specific tea.
exports.tea_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: tea detail: " + req.params.id);
};

// Handle tea create on POST.
exports.tea_create_post = async function (req, res) {
  console.log(req.body);
  let document = new tea();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"tea_type":"goat", "cost":12, "size":"large"}
  document.tea_type = req.body.tea_type;
  document.duration = req.body.duration;
  document.cost = req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle tea delete form on DELETE.
exports.tea_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: tea delete DELETE " + req.params.id);
};

// Handle tea update form on PUT.
exports.tea_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: tea update PUT" + req.params.id);
};


