
 const orm = require("../config/orm.js");  


const burger = {
  all: async () => {
    const result = await orm.all("burger");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burger", cols, vals);

    return result;
  },

  update: async (cols, vals) => {
    const result = await orm.update("burger", cols, vals);

    return result;
  },

  delete: async (condition) => {
    const result = await orm.delete("burger", condition);

    return result;
  }
};


module.exports = burger;
