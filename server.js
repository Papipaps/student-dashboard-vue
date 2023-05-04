const express = require('express');
const {logger} = require('./middleware/logger');
const studentsRouter = require('./controller/student');

const app = express();
const port = 3000;

app.use(logger)
app.use('/api/students', studentsRouter);
app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
