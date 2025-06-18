const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

// get all posts for a board
router.get('/:boardId', async (req, res) => {
    const boardId = parseInt(req.params.boardId);

    const posts = await prisma.post.findMany({
        where:{board_id:boardId},
        orderBy:[{pinned:'desc'}, {id:'desc'}] // Order by pinned first, then by how recent they were posted descending
    });

    res.status(200).json(posts);
});

// add a post to a board
router.post('/:boardID/add-post', async (req, res) => {
    const boardId = parseInt(req.params.boardID);
    const { gif_path, message, author } = req.body;

    if (!gif_path || !message) {
        return res.status(400).send({ message: "Please enter an gif path and message for the post." });
    }

    const newPost = await prisma.post.create({
        data: {
            board_id: boardId,
            message,
            gif_path,
            author
        }
    });

    res.status(201).json(newPost);
});

// pin/unpin post
router.put('/toggle-pin/:postId', async (req, res) => {
    const postId = parseInt(req.params.postId);

    try {
        // Retrieve the current post
        const post = await prisma.post.findUnique({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).send({ message: "Post not found." });
        }

        // toggle the pinned status
        const updatedPost = await prisma.post.update({
            where: { id: postId },
            data: {
                pinned: post.pinned ? 0 : 1
            }
        });
        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(500).send({ message: "An error occurred while toggling the pin status." });
    }
});

// upvote a post
router.put('/upvote-post/:postId', async (req, res) => {
    const postId = parseInt(req.params.postId);

    try {
        // Retrieve the current post
        const post = await prisma.post.findUnique({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).send({ message: "Post not found." });
        }

        // toggle the pinned status
        const updatedPost = await prisma.post.update({
            where: { id: postId },
            data: {
                upvotes: post.upvotes + 1
            }
        });
        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(500).send({ message: "An error occurred while upvoting the post." });
    }
});




module.exports = router;
