const Filters = require('../enums');
const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


router.get('/', async (req, res) => {
    //prisma.<NAME OF TABLE>.findMany();
    const allBoards = await prisma.board.findMany();
    res.json(allBoards);

});

router.get('/:filter', async (req, res) => {
    const filter = req.params.filter;
    if(filter === Filters.ALL){
        const allBoards = await prisma.board.findMany();
        res.status(200).json(allBoards);
    }
    else if(filter === Filters.RECENT){
        const recentBoards = await prisma.board.findMany({
            orderBy: {id: 'desc'},
            take: 6
        })
        res.status(200).json(recentBoards);
    }
    else{
        const filteredBoards = await prisma.board.findMany({
            where: {type: filter}
        });

        res.status(200).json(filteredBoards);
    }
});

router.get('/search/:searchTerm', async (req, res) => {
    const searchTerm = req.params.searchTerm;

    const searchResults = await prisma.board.findMany({
        where: {title: {contains: searchTerm, mode: 'insensitive'}}
    });

    res.status(200).json(searchResults);
});

router.post('/add-board', async (req, res) => {
    const { image_path, title, type, author } = req.body;

    if (!image_path || !title || !type) {
        return res.status(400).send({ message: "Please enter an image path, title, and type for the board." });
    }

    const newBoard = await prisma.board.create({
        data: {
            image_path,
            title,
            type,
            author // This can be undefined or null
        }
    });

    res.status(201).json(newBoard);
});


router.delete('/delete-board/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try{
        const deletedBoard = await prisma.board.delete({
            where: {id: id}
        })
        res.json(deletedBoard);
    }
    catch (err){
        res.status(404).send({message: "Board not found, please enter a valid id"});
    }
});



module.exports = router;
