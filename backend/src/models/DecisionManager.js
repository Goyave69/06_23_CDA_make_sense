const AbstractManager = require("./AbstractManager");
const { generateSqlSets } = require("../services/sqlSets");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  create(decision) {
    return this.database.query(
      `insert into ${this.table} (title, deadline, decision_content, organization_utility, decision_context, decision_benefits, decision_risks, progress_status, makesense_user_id, in_conflict) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        decision.title,
        decision.deadline,
        decision.decision_content,
        decision.organization_utility,
        decision.decision_context,
        decision.decision_benefits,
        decision.decision_risks,
        decision.progress_status,
        decision.makesense_user_id,
        decision.in_conflict,
      ]
    );
  }

  update(decision, id) {
    const sqlSets = generateSqlSets(decision);

    return this.database.query(
      `update ${this.table} set ${sqlSets} where id = ?`,
      [...Object.values(decision), id]
    );
  }
}

module.exports = DecisionManager;
