const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, AWS ECS!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
