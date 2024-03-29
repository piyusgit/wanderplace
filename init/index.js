const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderplace";

main()
  .then(() => {
    console.log("Connect to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  /* The code `initData.data = initData.data.map((obj) => ({ ...obj, owner: "65faf737162503b3fab616ea"
  }));` is mapping over each object in the `initData.data` array and creating a new object for each
  one. */
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65faf737162503b3fab616ea",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
