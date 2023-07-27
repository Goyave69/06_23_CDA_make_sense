/* eslint-disable object-shorthand */
const { hashPassword } = require("../services/passwordHelper");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "makesense_user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, birthdate, role) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.birthdate,
        JSON.stringify(user.role),
      ]
    );
  }

  // update(user) {
  //   return this.database.query(
  //     `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?, birthdate = ?, role = ? where id = ?`,
  //     [
  //       user.firstname,
  //       user.lastname,
  //       user.email,
  //       user.hashedPassword,
  //       user.birthdate,
  //       JSON.stringify(user.role),
  //       user.id,
  //     ]
  //   );
  // }

  async update(body) {
    let sqlQuery = `UPDATE ${this.table} SET `;

    // v Because of ESLint
    const { id, ...data } = body;

    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    const keys = Object.keys(data);
    for (const key in keys) {
      if (keys[key] !== "roles") {
        sqlQuery += `${keys[key]} = ?, `;
      }
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    let sqlData = [];

    if (data.roles) {
      sqlQuery += `, roles = ?`;
      const { roles, ...newData } = data;
      sqlData = [...Object.values(newData), JSON.stringify(roles), id];
    } else {
      sqlData = [...Object.values(data), id];
    }

    sqlQuery += ` WHERE id = ?`;

    const bodyResponse = { id: id, ...data };
    delete bodyResponse.password;

    return this.database.query(sqlQuery, sqlData);
  }

  findOneByEmail(email) {
    return this.database.query(
      `SELECT  email, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }

  findAllUsers() {
    return this.database.query(
      `select id, firstname, lastname, date_format(birthdate, "%d/%m/%Y") as birthdate, email from  ${this.table}`
    );
  }
}

module.exports = UserManager;
