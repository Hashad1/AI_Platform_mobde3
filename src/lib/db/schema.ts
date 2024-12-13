import { sql } from '@vercel/postgres';

export async function initializeDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'user',
      subscription VARCHAR(50) DEFAULT 'free',
      points_balance INTEGER DEFAULT 1000,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS assistants (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(50) NOT NULL,
      description TEXT,
      owner_id INTEGER REFERENCES users(id),
      message_count INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      last_used TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS points_transactions (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      amount INTEGER NOT NULL,
      type VARCHAR(50) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}