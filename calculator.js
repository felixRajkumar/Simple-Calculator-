const express = require("express");

const app = express();

const port =3000;

app.get('/', (req, resp) => {
    resp.write("Hello World");
    resp.send();
});

app.listen(3000, () => {
    console.log('Listening on port ' + port);
});