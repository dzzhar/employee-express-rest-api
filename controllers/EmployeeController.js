// import Employee Model
const Employee = require("../models/Employee.js");

// create EmployeeController class
class EmployeeController {
  // index method
  async index(req, res) {
    const employees = await Employee.all();

    // if data is available
    if (employees.length > 0) {
      const data = {
        message: "Get All Resources",
        data: employees,
      };

      return res.status(200).json(data);
    }

    // else
    const data = {
      message: `Employee is Empty`,
    };

    return res.status(200).json(data);
  }

  // store method
  async store(req, res) {
    const { name, gender, phone, address, email, status, hired_on } = req.body;

    // if any data is empty, send response error
    if (
      !name ||
      !gender ||
      !phone ||
      !address ||
      !email ||
      !status ||
      !hired_on
    ) {
      const data = {
        message: "All fields must be filled correctly",
      };

      return res.status(422).json(data);
    }

    // if it contains letter, send response error
    else if (isNaN(phone)) {
      const data = {
        message: `Phone Number must be integer`,
      };

      return res.status(422).json(data);
    }

    // else
    const employee = await Employee.create(req.body);

    const data = {
      message: `Resources is Added Successfully`,
      data: employee,
    };

    return res.status(201).json(data);
  }

  // show method
  async show(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);

    // if data is available
    if (employee) {
      const data = {
        message: `Get Detail Resource`,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resources Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // update method
  async update(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);

    // if data exist, then update data
    if (employee) {
      const employee = await Employee.update(id, req.body);

      const data = {
        message: `Resources is Update Successfully`,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // delete method
  async destroy(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);

    // if data available
    if (employee) {
      await Employee.delete(id);
      const data = {
        message: `Resource is Deleted Successfully`,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // search by name
  async search(req, res) {
    const { name } = req.params;
    const employee = await Employee.search(name);

    // if data is available
    if (employee.length > 0) {
      const data = {
        message: `Get Searched Resource`,
        total: employee.length,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = active
  async active(req, res) {
    const status = `active`;
    const employee = await Employee.findByStatus(status);

    // if data is available
    if (employee.length > 0) {
      const data = {
        message: `Get Active Resource`,
        total: employee.length,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = inactive
  async inactive(req, res) {
    const status = `inactive`;
    const employee = await Employee.findByStatus(status);

    // if data is available
    if (employee.length > 0) {
      const data = {
        message: `Get Inactive Resource`,
        total: employee.length,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }

  // find status = terminated
  async terminated(req, res) {
    const status = `terminated`;
    const employee = await Employee.findByStatus(status);

    // if data is available
    if (employee.length > 0) {
      const data = {
        message: `Get Terminated Resource`,
        total: employee.length,
        data: employee,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Resource Not Found`,
      };

      return res.status(404).json(data);
    }
  }
}

// create an instance of controller
const object = new EmployeeController();

// export object
module.exports = object;
