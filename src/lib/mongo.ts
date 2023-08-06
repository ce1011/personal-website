import { MongoClient, MongoClientOptions } from 'mongodb';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient> {
    if (cachedClient) {
        return cachedClient;
    }

    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('MONGODB_URI not found in .env file');
    }

    const client = await MongoClient.connect(uri);
    cachedClient = client;

    return client;
}
