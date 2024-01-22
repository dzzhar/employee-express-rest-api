// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController.js");

// create new router
const express = require("express");
const router = express.Router();

// get all resources
router.get("/employees", EmployeeController.index);

// add resource
router.post("/employees", EmployeeController.store);

// update resource
router.put("/employees/:id", EmployeeController.update);

// delete resource
router.delete("/employees/:id", EmployeeController.destroy);

// get detail resource
router.get("/employees/:id", EmployeeController.show);

// get resource by name
router.get("/employees/search/:name", EmployeeController.search);

// get resource by status active
router.get("/employees/status/active", EmployeeController.active);

// get resource by status inactive
router.get("/employees/status/inactive", EmployeeController.inactive);

// get resource by status terminated
router.get("/employees/status/terminated", EmployeeController.terminated);

// export router
module.exports = router;
