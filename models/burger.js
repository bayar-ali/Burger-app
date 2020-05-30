
const orm = require("../config/orm"); 


const cat = {
  all: async () => {
    const result = await orm.all("cat");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("cat", cols, vals);

    return result;
  },

  create: async (cols, vals) => {
    const result = await orm.create("cat", cols, vals);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("cat", condition);

    return result;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
