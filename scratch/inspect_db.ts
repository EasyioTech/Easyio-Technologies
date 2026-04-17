import { client } from '../lib/db';

async function inspect() {
  const result = await client`
    SELECT column_name, data_type 
    FROM information_schema.columns 
    WHERE table_name = 'blog_posts'
  `;
  console.log('Columns in blog_posts:', result);
  process.exit(0);
}

inspect().catch(err => {
  console.error(err);
  process.exit(1);
});
