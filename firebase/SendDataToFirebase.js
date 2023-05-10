const { database } = require("./config");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
let can_send = true;
let sended_date = null;

// Create a new item in the database
const createTemp = (value) => {
  const newItemRef = database.ref("temps").push();
  let date = new Date();
  let actual_date = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  newItemRef.set({ value, date: actual_date, time });
  // send notification

  if (
    value > 35 &&
    (sended_date === null || date.getTime() - sended_date.getTime() > 60 * 1000)
  ) {
    sended_date = new Date();
    const message = {
      notification: {
        title: "Over Temp",
        body: `Temp is now over than ${value}`,
      },
      topic: "Temp_Notif",
    };

    admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Successfully sent message:", response);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }
};

module.exports = { createTemp };
