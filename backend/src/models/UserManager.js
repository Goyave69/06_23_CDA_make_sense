const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "makesense_user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, email) values (?, ?)`,
      [user.username, user.email]
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
