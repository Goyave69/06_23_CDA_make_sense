const AbstractManager = require("./AbstractManager");

class SurveyManager extends AbstractManager {
  constructor() {
    super({ table: "survey" });
  }

  create(survey) {
    return this.database.query(
      `insert into ${this.table} (id, user_id, decision_id, comment_content, makesense_user_id) values (?, ?, ?, ?, ?)`,
      [
        survey.id,
        survey.user_id,
        survey.decision_id,
        survey.comment_content,
        survey.makesense_user_id,
      ]
    );
  }

  update(survey) {
    return this.database.query(
      `update ${this.table} set user_id = ?, decision_id = ?, comment_content = ?, makesense_user_id = ? where id = ?`,
      [
        survey.user_id,
        survey.decision_id,
        survey.comment_content,
        survey.makesense_user_id,
        survey.id,
      ]
    );
  }
}

module.exports = SurveyManager;
