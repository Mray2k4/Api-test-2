const express = require('express');
const app = express();
const port = 7000;


app.use(express.static('backend'))

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World</h1>')
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))