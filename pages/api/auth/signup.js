import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { email, password } = data;

  if (!email || !password || password.trim().length < 4) {
    res.status(422).json({
        message:
          "invalid info. also note that the password should be at least 3 char",
      });
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({email:email});
  if(existingUser){
    res.status(422).json({message: 'user exist already'});
    client.close();
    return;
  }
    
  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Successfully created user" });
}
export default handler;
