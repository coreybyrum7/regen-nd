import { Router } from 'express';
import { Pool, PoolClient } from 'pg';
import { postToCamelCase } from '../utils';

const router = Router();
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://postgres:password@localhost:5432/challenge',
});

router.get('/post/:postId', async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const postId = req.params.postId;

    const postQuery = await client.query('SELECT * FROM post WHERE id = $1', [
      postId,
    ]);
    if (postQuery.rows.length === 1) {
      res.json({ project: postToCamelCase(postQuery.rows[0]) });
    } else {
      res.send(404);
    }
  } catch (e) {
    res.status(500).send(e);
  } finally {
    if (client) client.release();
  }
});
