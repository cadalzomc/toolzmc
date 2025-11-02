import pg from "pg";
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then(() => {
    console.log("✅ Connected successfully!");
    return client.end();
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err.message);
  });
