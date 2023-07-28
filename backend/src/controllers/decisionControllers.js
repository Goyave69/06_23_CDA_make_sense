const models = require("../models");

const getAllDecisions = (req, res) => {
  models.decision
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneDecision = (req, res) => {
  models.decision
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateDecision = (req, res) => {
  const decision = req.body;

  const id = parseInt(req.params.id, 10);

  if (decision.progress_status !== undefined) {
    decision.progress_status += 1;
  }
  models.decision
    .update(decision, id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
        console.warn("Step progress");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const updateDecisionStatus = (req, res) => {
//   const decision = req.body;
//   const id = parseInt(req.params.id, 10);

//   models.decision
//     .update(decision, id)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//         console.warn("Step progress");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const addDecision = (req, res) => {
  const decision = req.body;

  models.decision
    .create(decision)
    .then(([result]) => {
      const { insertId } = result;
      res.status(201).json({ id: insertId });
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteDecision = (req, res) => {
  models.decision
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllDecisions,
  getOneDecision,
  updateDecision,
  addDecision,
  deleteDecision,
  // updateDecisionStatus,
};
