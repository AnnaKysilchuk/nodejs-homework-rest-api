const { Contact } = require('../../models/contacts');
const createError = require('../../helpers');

const deleteById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw createError(404);
    };
    res.json({
      message: "Contact deleted"
    });
  }
  catch (error) {
    next(error);
  }
};

module.exports = deleteById;