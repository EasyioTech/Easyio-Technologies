const postgres = require('postgres');

async function setup() {
  const sql = postgres('postgres://postgres:admin@localhost:5432/postgres');
  try {
    await sql.unsafe('CREATE DATABASE easyio_db');
    console.log('Database easyio_db created successfully');
  } catch (err) {
    if (err.message.includes('already exists')) {
      console.log('Database easyio_db already exists');
    } else {
      console.error('Error:', err.message);
    }
  } finally {
    await sql.end();
  }
}

setup();
