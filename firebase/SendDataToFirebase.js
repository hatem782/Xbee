const { database } = require("./config");

// Create a new item in the database
const createTemp = (value) => {
  const newItemRef = database.ref("temps").push();
  let date = new Date();
  let actual_date = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  newItemRef.set({ value, date: actual_date, time });
};

module.exports = { createTemp };
