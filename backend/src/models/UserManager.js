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

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, password = ?, birthdate = ?, role = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.birthdate,
        JSON.stringify(user.role),
        user.id,
      ]
    );
  }

  findOneByEmail(email) {
    return this.database.query(
      `select * from ${this.table} where email = ?`,
      email
    );
  }
}

module.exports = UserManager;
