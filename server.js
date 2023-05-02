/**
 * TODO : PASSER A EXPRESS !!!!
 * Implementer le frontend en Vue puis Angular -> Affichage des eleves et ajouts de nouveaux eleves a l'aide d'une saisie formulaire.
 * */

const http = require('http');
const logger = require('./middleware/logger');
const studentsRouter = require('./controller/student');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  logger.log(req);

  studentsRouter.handle(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
