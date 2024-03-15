import { Router } from 'express';
import { Pool, PoolClient } from 'pg';
import { projectToCamelCase, postToCamelCase } from '../utils';

const router = Router();
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://postgres:password@localhost:5432/challenge',
});

router.get('/:projectId', async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const projectId = req.params.projectId;

    const projectQuery = await client.query(
      'SELECT * FROM project WHERE id = $1',
      [projectId],
    );
    if (projectQuery.rows.length === 1) {
      res.json({ project: projectToCamelCase(projectQuery.rows[0]) });
    } else {
      res.send(404);
    }
  } catch (e) {
    res.status(500).send(e);
  } finally {
    if (client) client.release();
  }
});

router.get('/:projectId/posts', async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const projectId = req.params.projectId;
    const limit = req.query.limit;
    const offset = req.query.offset;

    const postsQuery = await client.query(
      'SELECT * FROM post WHERE project_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3',
      [projectId, limit, offset],
    );

    if (postsQuery.rows.length > 0) {
      const posts = postsQuery.rows?.map(post => postToCamelCase(post)) || [];
      res.json({ posts });
    } else {
      res.send(404);
    }
  } catch (e) {
    res.status(500).send(e);
  } finally {
    if (client) client.release();
  }
});
