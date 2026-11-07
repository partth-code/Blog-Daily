import React from 'react';
import mongoose from 'mongoose';

export const ConnectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        console.log("MongoDB URI exists:", !!uri);

        if (!uri) {
            throw new Error("MONGODB_URI is undefined");
        }

        await mongoose.connect(uri);

        console.log("DB Connected");
    }
    catch (error) {
        console.error("DB Connection Error:", error);
        throw error;
    }
};