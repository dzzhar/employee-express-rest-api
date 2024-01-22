// import the database
const db = require("../config/database");

// create Employee class
class Employee {
  // method to get all data
  static all() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees`;
      /**
       * execute a query using the query method
       * accepts 2 params: query and callback
       */
      db.query(sql, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to add data
  static async create(data) {
    // Promise 1: insert data into database
    const id = await new Promise((resolve, reject) => {
      const sql = `INSERT INTO employees SET ?`;

      db.query(sql, data, (err, results) => {
        // check for error in data
        err ? reject(err) : resolve(results.insertId);
      });
    });

    // Promise 2: query data based on id
    const employee = this.find(id);
    return employee;
  }

  // method to find a spesific data
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to edit data
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = `UPDATE employees SET ? WHERE id = ?`;
      db.query(sql, [data, id], (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });

    // find newly updated data
    const employee = await this.find(id);
    return employee;
  }

  // method to delete data
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = `DELETE FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to find data by id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        const [employee] = results;
        resolve(employee);
      });
    });
  }

  // method to find data by name
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE name = ?`;

      db.query(sql, name, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }

  // method to find data by status
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM employees WHERE status = ?`;

      db.query(sql, status, (err, results) => {
        // check for errors in data
        err ? reject(err) : resolve(results);
      });
    });
  }
}

// export Employee class
module.exports = Employee;
