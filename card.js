const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    return res.sendFile(__dirname+'/index.html');
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });

module.exports = app;