const jsonServer = require("json-server");
const cors = require("cors");
const port = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router("db.json");

server.db = router.db;

server.use(cors());
server.use(router);
server.listen(port);
