import { client } from '../lib/db';

async function inspectAll() {
  const tables = ['blog_posts', 'projects', 'testimonials'];
  for (const table of tables) {
    const result = await client`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = ${table}
    `;
    console.log(`Columns in ${table}:`, result);
  }
  process.exit(0);
}

inspectAll().catch(err => {
  console.error(err);
  process.exit(1);
});
