const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('build'));

app.get('/*', function (there, backAgain) {
  backAgain.sendFile('index.html', { root: './build' });
});

app.listen(PORT, function () {
  // lets you know which port your server has started on
  console.log(`Port Number: ${PORT}`);
});
