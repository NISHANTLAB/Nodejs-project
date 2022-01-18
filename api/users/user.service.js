const pool = require("../../config/database");
// insert the values in database
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into registration(firstName, lastName, gender, email, password, phoneNumber) 
                values(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


//get the data from database:-
getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  //To findout data from database by id:-
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,phoneNumber from registration where id = ?`,
      [id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,firstName,lastName,gender,email,phoneNumber from registration`,
      [],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  //Update the data from database
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, phoneNumber=? where id = ?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber,
        data.id
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  //Delete the data from database:-
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};