const admin = require("firebase-admin");
const serviceAccount = require("./we-sopt-jinuk-firebase-adminsdk-ttcb6-bf3da8d11c");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};