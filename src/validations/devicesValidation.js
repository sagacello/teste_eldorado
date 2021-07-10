const JOI = require('joi');

const devicesValidation = (data) => {
  const validation = JOI.object({
    color: JOI.string().max(16).required(),
    partNumber: JOI.number().min(1).required(),
    categoryId: JOI.number().required()
  }).validate(data);
  if (validation.error) throw validation.error.details[0];
};

module.exports = {
  devicesValidation,
};
