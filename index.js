app.get('/likes/post/:post_id', async (req, res) => {
    const { post_id } = req.params;
    const client = await pool.connect();


    try {
        const likes = await client.query(
            `SELECT users.username, users.id AS user_id, likes.id AS likes_id
FROM likes
INNER JOIN users ON likes.user_id = users.id
WHERE likes.post_id = $4`,
            [post_id])
        res.json(likes.rows)
    } catch (error) {
        console.error('Error', error.message)
        res.status(500).json({ error: RTCError.message })
    } finally {
        client.release();
    }
})