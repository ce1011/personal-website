// pages/api/test.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../lib/mongo';
import {Post} from "@/lib/models/Post";

import { NextResponse } from 'next/server'

export async function GET() {
    const client = await connectToDatabase();
    const db = client.db('personalwebsite');

    // Your MongoDB operations here, for example:
    const collection = db.collection('blogs');
    const posts = await collection.find({}).toArray();


    return NextResponse.json( posts )
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const client = await connectToDatabase();
//         const db = client.db('personalwebsite');
//
//         // Your MongoDB operations here, for example:
//         const collection = db.collection('blogs');
//         const posts = await collection.find({}).toArray();
//
//         res.status(200).json(posts);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }
