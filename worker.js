const {Worker} = require("bullmq")
const Redis = require("ioredis")

const redisConenction = new Redis({
    host:"127.0.0.1",
    port:6379,
    maxRetriesPerRequest:null
})

const worker = new Worker(
    "taskQueue",
    async(job)=>{
        console.log(`processing job for ${job.data.name}`)
        await new Promise((resolve,reject)=>setTimeout(reject("mail server down"),5000))
        console.log(`done job for ${job.data.name}`)
    },
    {connection:redisConenction}
)

worker.on("completed",(job)=>{
    console.log(`complented job for ${job.id}`)
})
worker.on("failed",(job,err)=>{
    console.log(`faild job for ${job.id} reason is ${err.message}`)
})
