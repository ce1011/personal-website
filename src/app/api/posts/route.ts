import { connectToDatabase } from '../../../lib/mongo';

import { NextResponse } from 'next/server'

export async function GET() {
    const client = await connectToDatabase();
    const db = client.db('personalwebsite');

    // Your MongoDB operations here, for example:
    const collection = db.collection('blogs');
    const posts = await collection.find({}).toArray();


    return NextResponse.json( posts )
}
