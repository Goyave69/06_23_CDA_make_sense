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

  getByDecision(id) {
    return this.database.query(
      `SELECT * from decision JOIN survey ON decision.id = survey.decision_id where decision.id= ?`,
      [id]
    );
  }
}

module.exports = SurveyManager;
