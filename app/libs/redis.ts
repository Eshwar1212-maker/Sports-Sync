import { Redis } from "ioredis"


const getRedisUrl = () => {
   return process.env.REDIS_URL!
}

export const redis = new Redis(getRedisUrl())
