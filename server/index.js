require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = express.Router();
app.use(router);

//set up routes here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
