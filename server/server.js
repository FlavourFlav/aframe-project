const express = require('express');
const axios = require('axios');
const cors = require('cors');

const https = require('https');
const fs = require('fs');
const port = 8443;

const key = fs.readFileSync('./server.key');
const cert = fs.readFileSync('./server.cer');
const options = {
    key: key,
    cert: cert
};

const app = express();

const allowedOrigins = ['https://localhost:3000'];
app.use(cors({
  origin: function(origin, callback){
    if (!origin) {
      return callback(null, true);
    }

    if (!allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    axios.get('https://opendata.muenchen.de/api/3/action/datastore_search', {
        params: {
            resource_id: 'df31fe96-0d7d-4d00-b93d-caf9e0e4686b'
        }
    })
        .then(response => {
            res.json(response.data.result.records);
        })
        .catch(error => {
            res.status(500).send('Error retrieving data');
        });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("HTTPS server starting on port : " + port)
});