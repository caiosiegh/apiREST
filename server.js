const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require("./db/testes")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/tests/:id", async (req, res) => {
  if (req.params.id == 0) {
    const tests = await db.allTests();
    res.status(200).json({ tests });
  }
  else {
    const tests = await db.selectTest(req.params.id);
    res.status(200).json({ tests });
  }

});

app.post("/tests/addTest", async (req, res) => {
  const results = await db.addTest(req.body);
  res.status(201).json({ id: results[0] });
});

app.delete("/tests/deleteTest/:id", async (req, res) => {
  if (req.params.id == 0) {
    res.json({ erro: "Não é possível deletar esse ID" })
  }
  await db.deleteTest(req.params.id);
  res.status(200).json({ Status: "Teste deletado com sucesso." })
});

app.listen(3000, () => console.log("Servidor Iniciado"))