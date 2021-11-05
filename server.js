const express = require('express');
// console.log(express);

// SAVE INSTANCE OF EXPRESS FUNCTION TO A CONST
const app = express();
const port = 3000;

// ROUTING
app.get("/api")

// ALWAYS AT THE END OF THE FILE
// STARTING WITH THE SERVER
app.listen(port, () => console.log(`>>> Server  started on port ${port} and is listening for REQuest to RESpond to <<<`));