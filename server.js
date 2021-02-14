const express = require('express');
const path = require('path');
const app = express();

console.log("teste")

app.use(express.static(`${__dirname}/dist/calculatorMyCafe`));

app.get('/',(req,res) => {
  res.sendFile(path.join(`${__dirname}/dist/calculatorMyCafe/index.html`));
});

app.listen(4200);
