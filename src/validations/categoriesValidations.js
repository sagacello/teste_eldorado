const JOI = require('joi');

const categoryValidation = (data) => {
  const validation = JOI.object({
    name: JOI.string().max(128).required(),
  }).validate(data);
  if (validation.error) throw validation.error.details[0];
};

module.exports = {
  categoryValidation,
};
