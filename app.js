const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors()); // enable cors policy
const Redis = require("ioredis");
const { Queue } = require("bullmq");

//redis connection..
const redisConenction = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

//queues...
const myQueue = new Queue("taskQueue", { connection: redisConenction });

app.post("/add-job", async (req, res) => {
  console.log("main task in progress...");
  console.log("sending sub task to job..");
  const { name } = req.body;
  await myQueue.add("task", { name }, { delay: 0 });
  res.json({
    success: true,
    message: "Job added for " + name,
  });
});

const CACHE_EXPIRY = 600;

//middleware
const cacheMiddeware = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const cacheData = await redisConenction.get(userId);
    console.log(cacheData)
    if (cacheData) {
      console.log("Cache hit");
      res.json({ fromCache: true, data: JSON.parse(cacheData) });
    } else {
      console.log("cache Miss");
      next();
    }
  } catch (err) {
    console.log(err)
    next();
  }
};

const fakeDatbase = {
  1: { id: "1", name: "Rama" },
  2: { id: "2", name: "Shyam" },
  3: { id: "3", name: "Amit" },
  4: { id: "4", name: "Amit" },
};

app.get("/user/:userId", cacheMiddeware, async (req, res) => {
  const { userId } = req.params;
  const userData = fakeDatbase[userId];

  await redisConenction.setex(userId, CACHE_EXPIRY, JSON.stringify(userData));
  console.log("here...")
  res.json({
    fromCache:false,
    data:userData
  })
});

//router
const userRoutes = require("./src/routes/UserRoutes");
const roleRoutes = require("./src/routes/RoleRoutes");
const uploadRoutes = require("./src/routes/UploadRoutes");
const productRoutes = require("./src/routes/ProductRoutes");

//routes use
//localhost:3000/user/user
app.use("/user", userRoutes);
app.use("/role", roleRoutes);
app.use("/upload", uploadRoutes);
app.use("/prod", productRoutes);

//db connection

mongoose
  .connect("mongodb://127.0.0.1:27017/akshayraj_node")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection failed");
  });

//server creation
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
