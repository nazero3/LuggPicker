import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://123:123@cluster0.dflg9zk.mongodb.net/?retryWrites=true&w=majority');
    return client;
}
