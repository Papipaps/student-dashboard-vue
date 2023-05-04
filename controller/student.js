const express = require("express");
const router = express.Router();
const z = require("zod");
const StudentService = require("../service/studentService");

const validateStringAsNumber = () =>
  z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().max(100)
  );

const pagination = z.object({
  page: validateStringAsNumber().optional(),
  size: validateStringAsNumber().optional(),
  asc: z.boolean().optional(),
});

router.get("/list", async (req, res) => {
  try {
    const { page = 1, size = 10 } = pagination.parse(req.query);
    const students = await StudentService.getStudents(page, size);
    res.send(students);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
