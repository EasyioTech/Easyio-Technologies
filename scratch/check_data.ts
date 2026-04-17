import { client } from '../lib/db';

async function checkData() {
  const result = await client`
    SELECT id, published_at 
    FROM blog_posts
  `;
  console.log('Data in blog_posts:', result);
  process.exit(0);
}

checkData().catch(err => {
  console.error(err);
  process.exit(1);
});
