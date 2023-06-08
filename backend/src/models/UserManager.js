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
        user.password,
        user.birthdate,
        user.role,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, email = ? where id = ?`,
      [user.username, user.email, user.id]
    );
  }
}

module.exports = UserManager;
