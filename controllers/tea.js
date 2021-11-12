var Tea = require("../models/tea");

// List of all teas
exports.tea_list = async function (req, res) {
  try {
    theteas = await Tea.find();
    res.send(theteas);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific tea.
exports.tea_detail = async function (req, res) {
  console.log("detail"  + req.params.id) 
    try { 
        result = await Tea.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

// Handle tea create on POST.
exports.tea_create_post = async function (req, res) {
  let document = new Tea();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.tea_brand = req.body.tea_brand;
  document.size = req.body.size;
  document.price = req.body.price;
  console.log(req.body);
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle tea delete form on DELETE.
exports.tea_delete =async function (req, res) {
  console.log("delete "  + req.params.id) 
    try { 
        result = await Tea.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle tea update form on PUT.
exports.tea_update_put =async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Tea.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.costume_type)  
               toUpdate.tea_brand = req.body.tea_brand; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};

// VIEWS
// Handle a show all view
exports.tea_view_all_Page = async function(req, res) { 
  try{ 
      theTeas = await Tea.find(); 
      res.render('tea', { title: 'Tea Search Results', results: theTeas }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 
