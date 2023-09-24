import { Redis } from "ioredis"


const getRedisUrl = () => {
  if(process.env.REDIS_URL){
    return process.env.REDIS_URL
  }
  throw new Error("NO process.env.UPSTASH_REDIS_REST_UR")
}

export const redis = new Redis(getRedisUrl())
