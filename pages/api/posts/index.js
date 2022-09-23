import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('blog');
    switch(req.method){
        case "GET":
            const posts = await db.collection('posts').find({}).toArray();
            res.status(200).json({posts});
            break;
    }
}