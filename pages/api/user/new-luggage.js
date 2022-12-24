//import { MongoClient } from "mongodb";
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
    const session = await getSession({ req: req });
    if (!session) {
      res.status(401).json({ message: "Not authenticated!" });
      return;
    }

    const data = req.body;

    // const { name, id, date, weight, airport } = data;
    //console.log(data);

    const client = await connectToDatabase();

    const db = client.db();

    const luggCollection = db.collection('details');
    const result = await luggCollection.insertOne(data);
    console.log(result);
    client.close;

    res.status(201).json({ message: "lug inserted" });
  
}

export default handler;
