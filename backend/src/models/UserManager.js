const { generateSqlSets } = require("../services/sqlSets");
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

  update(user, id) {
    const sqlSets = generateSqlSets(user);

    return this.database.query(
      `update ${this.table} set ${sqlSets} where id = ?`,
      [...Object.values(user), id]
    );
  }

  findOneByEmail(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
