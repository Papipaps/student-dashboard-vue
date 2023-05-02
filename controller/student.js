const url = require('url');
const StudentService = require('../service/studentService');

async function handle(req, res) {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/api/students' && req.method === 'GET') {
    const pageSize = parseInt(parsedUrl.query.pageSize || '10');
    const pageNumber = parseInt(parsedUrl.query.pageNumber || '1');

    try {
      // Appel de la couche de service pour récupérer les étudiants
      const students = await StudentService.getStudents(pageSize, pageNumber);

      // Envoi de la réponse JSON
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(students));
    } catch (error) {
      console.error(error);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end('Internal server error');
    }
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not found');
  }
}

module.exports = { handle };