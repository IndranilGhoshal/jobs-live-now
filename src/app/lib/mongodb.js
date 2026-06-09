import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose || {
    conn: null,
    promise: null,
};

global.mongoose = cached;

async function dbConnect() {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {

        cached.promise = mongoose.connect(MONGO_URI, {
            bufferCommands: false,
            serverSelectionTimeoutMS: 30000,
        });

    }

    cached.conn = await cached.promise;

    return cached.conn;
}

export default dbConnect;