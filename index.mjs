import lodash from 'lodash'
import { MongoClient,ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()


const url = process.env.uri
console.log(url)
const dbclient = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

let connection
export const handler = async (event) => {
  const random  = lodash.random(10)
  try{
    
    if(!connection){
      connection = await dbclient.connect(url)
    }
    const db = connection.db(process.env.dbase)
    const collection = db.collection(process.env.collections)
    
    const data = await collection.find({}).toArray()
    

    console.log("event: ",data


    )
    const response = {
      statusCode: 200,
      body: JSON.stringify(`Data:${data}`)
    }
  return response;
}
  catch(err){ 
    console.log("db connection error", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", message: err.message }),
    };

   }
 
}
