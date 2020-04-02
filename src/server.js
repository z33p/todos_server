let express = require('express');
let routes = require("./routes")
let app = express();

require("./database/index")

app.use(express.json());
app.use(routes)

const port = 3000;

app.listen(port, function () {
  console.log(`Application running on port ${port}`);
});
