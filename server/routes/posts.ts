import { Router } from 'express';
import bodyParser from 'body-parser';
import { Pool, PoolClient } from 'pg';
import { postToCamelCase } from '../utils';

const router = Router();
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgres://postgres:password@localhost:5432/challenge',
});
const jsonParser = bodyParser.json();

// get post
router.get('/:postId', async (req, res) => {
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

// delete post
router.delete('/delete/:postId', async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const postId = req.params.postId;
    await client.query('DELETE FROM post WHERE id = $1', [postId]);
    res.status(204).send();
  } catch (e) {
    res.status(500).sendStatus(e);
  } finally {
    if (client) client.release();
  }
});

// create post
router.post('/create', jsonParser, async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const { projectId, title, comment, createdAt } = req.body;

    await client.query(
      'INSERT INTO post (project_id, title, comment, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [projectId, title, comment, createdAt],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send({
          message: 'Post added successfully!',
          post: postToCamelCase(results.rows[0]),
        });
      },
    );
  } catch (e) {
    res.status(500).send(e);
  } finally {
    if (client) client.release();
  }
});

// update post
router.post('/update/:postId', jsonParser, async (req, res) => {
  let client: PoolClient;
  try {
    client = await pool.connect();

    const postId = req.params.postId;
    const { title, comment } = req.body;
    console.log(title, comment);

    await client.query(
      'UPDATE post SET title = $1, comment = $2 WHERE id = $3 RETURNING *',
      [title, comment, postId],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send({
          message: 'Post updated successfully!',
          post: postToCamelCase(results.rows[0]),
        });
      },
    );
  } catch (e) {
    res.status(500).send(e);
  } finally {
    if (client) client.release();
  }
});

export default router;
