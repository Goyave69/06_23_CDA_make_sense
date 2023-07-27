const AbstractManager = require("./AbstractManager");

class SurveyManager extends AbstractManager {
  constructor() {
    super({ table: "survey" });
  }

  create(survey) {
    return this.database.query(
      `insert into ${this.table} (decision_id, comment_content, makesense_user_id) values (?, ?, ?)`,
      [survey.decision_id, survey.comment_content, survey.makesense_user_id]
    );
  }

  update(survey) {
    return this.database.query(
      `update ${this.table} decision_id = ?, comment_content = ?, makesense_user_id = ? where id = ?`,
      [
        survey.decision_id,
        survey.comment_content,
        survey.makesense_user_id,
        survey.id,
      ]
    );
  }

  getByDecision(survey, id) {
    return this.database.query(
      `SELECT s.id, s.comment_content, u.firstname, u.lastname FROM ${this.table} AS s JOIN makesense_user AS u ON u.id = s.makesense_user_id WHERE s.decision_id = ?`,
      [survey.decision_id, id]
    );
  }
}

module.exports = SurveyManager;
