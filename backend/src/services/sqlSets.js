const generateSqlSets = (data) => {
  return Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(", ");
};
module.exports = { generateSqlSets };
