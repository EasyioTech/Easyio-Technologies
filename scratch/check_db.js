const { db } = require('./lib/db/index');
const { blogPosts } = require('./lib/db/schema/index');

async function checkPosts() {
  try {
    const posts = await db.select().from(blogPosts);
    console.log('Total posts:', posts.length);
    console.log('Posts:', JSON.stringify(posts, null, 2));
    process.exit(0);
  } catch (err) {
    console.error('DB Error:', err);
    process.exit(1);
  }
}

checkPosts();
