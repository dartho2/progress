const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/fizjo-progress'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/fizjo-progress/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started');
});
