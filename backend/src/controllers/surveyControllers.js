const models = require("../models");

const getAllSurveys = (req, res) => {
  models.survey
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneSurvey = (req, res) => {
  models.survey
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

const updateSurvey = (req, res) => {
  const survey = req.body;

  survey.id = parseInt(req.params.id, 10);

  models.survey
    .update(survey)
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

const addSurvey = (req, res) => {
  const survey = req.body;

  models.survey
    .create(survey)
    .then(([result]) => {
      res.location(`/surveys/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteSurvey = (req, res) => {
  models.survey
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
  getAllSurveys,
  getOneSurvey,
  updateSurvey,
  addSurvey,
  deleteSurvey,
};
