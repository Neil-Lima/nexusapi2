/* eslint-disable prettier/prettier */
import { registerAs } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

const logger = new Logger('Database');

mongoose.connection.on('connected', async () => {
  logger.log('🚀 Successfully connected to MongoDB!');
  
  const dbName = mongoose.connection.db.databaseName;
  logger.log(`📚 Database name: ${dbName}`);
  
  logger.log('📋 Scanning collections...');
  const collections = await mongoose.connection.db.collections();
  
  if (collections.length === 0) {
    logger.log('ℹ️ No collections found in database');
  } else {
    logger.log('📑 Available collections:');
    collections.forEach((collection) => {
      logger.log(`   ├─ ${collection.collectionName}`);
    });
    logger.log(`   └─ Total collections: ${collections.length}`);
  }
});

mongoose.connection.on('error', (err) => {
  logger.error(`❌ Database connection error: ${err}`);
  logger.error('⚠️ Check your connection string and credentials');
});

mongoose.connection.on('disconnected', () => {
  logger.warn('🔌 Database connection lost');
  logger.warn('🔄 Attempting to reconnect...');
});

export default registerAs('database', () => ({
  uri: process.env.MONGODB_URI,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
}));
