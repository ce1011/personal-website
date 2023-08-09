import { connectToDatabase } from '../../../lib/mongo';
import { NextResponse } from 'next/server';
import * as url from "url";
import { ObjectId } from "bson";

export async function GET(req: Request) {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    const id = queryParams.id;

    const client = await connectToDatabase();
    const db = client.db('personalwebsite');

    // Your MongoDB operations here, for example:
    const collection = db.collection('blogs');
    const posts = await collection.findOne({ _id: new ObjectId(id as string) });

    return NextResponse.json(posts);
}
