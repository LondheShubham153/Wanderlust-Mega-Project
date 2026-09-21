import mongoose from 'mongoose';
import fs from 'fs';
import connectDB from './config/db.js';
import Post from './models/post.js';

await connectDB();
const rawData = JSON.parse(fs.readFileSync('./data/sample_posts.json', 'utf8'));
const data = rawData.map(post => {
  if (post._id && post._id.$oid) { post._id = post._id.$oid; }
  if (post.timeOfPost && post.timeOfPost.$date) { post.timeOfPost = post.timeOfPost.$date; }
  return post;
});

async function seed() {
  await Post.deleteMany({});
  await Post.insertMany(data);
  console.log('Database seeded with sample posts!');
  process.exit();
}

seed()
