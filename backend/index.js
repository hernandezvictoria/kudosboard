const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('kudosboard server active');
});

const boardRoutes = require('./routes/boards');
app.use('/boards', boardRoutes);

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
