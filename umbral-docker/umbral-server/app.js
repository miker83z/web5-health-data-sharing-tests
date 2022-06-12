'use strict';
// imports
const log4js = require('log4js');
const logger = log4js.getLogger('UmbralLogger');
const bodyParser = require('body-parser');
const http = require('http')
const express = require('express')
const app = express();
const cors = require('cors');
// logic
const decrypt = require('./logic/decrypt')
const encrypt = require('./logic/encrypt')
const generateKfrags = require('./logic/generateKfrags')
const reencrypt = require('./logic/reencrypt')
const requestKeypar = require('./logic/requestKeypar')
const requestSigner = require('./logic/requestSigner')
const sign = require('./logic/sign')
const verify = require('./logic/verify')
// server settings
const serverhost = "localhost";
const serverport = "5001";
const umbralapihost = "http://umbral-core";
const umbralapiport = "8022";
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

logger.level = 'debug';

// server start
var server = http.createServer(app).listen(
    serverport, 
    function () { 
        console.log(`Server started on ${serverport}`) 
    }
);
logger.info('****************** SERVER STARTED ************************');
logger.info('***************  http://%s:%s  ******************', serverhost, serverport);
server.timeout = 240000;

// enpoints
app.get('/stateless/keypair', async function (req, res) {
    try {
        logger.info('Requesting Keypair')
        
        let response = await requestKeypar.requestKeypair(umbralapihost,umbralapiport);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.get('/stateless/signer', async function (req, res) {
    try {
        logger.info('Requesting Signer')

        let response = await requestSigner.requestSigner(umbralapihost,umbralapiport);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/sign', async function (req, res) {
    try {
        logger.info('Signing')

        let response = sign.sign(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/verify', async function (req, res) {
    try {
        logger.info('Verifying')

        let response = verify.verify(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/encrypt', async function (req, res) {
    try {
        logger.info('Encrypting')

        let response = encrypt.encrypt(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/kfrags', async function (req, res) {
    try {
        logger.info('Generating KFrags')

        let response = generateKfrags.generateKfrags(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/reencrypt', async function (req, res) {
    try {
        logger.info('Reencrypting')

        let response = reencrypt.reencrypt(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});

app.post('/stateless/decrypt', async function (req, res) {
    try {
        logger.info('Decrypting')

        let response = decrypt.decrypt(umbralapihost,umbralapiport,req.body);
        let message = response.data;

        const response_payload = {
            result: message,
            error: null,
            errorData: null
        }
        res.send(response_payload);
    } catch (error) {
        const response_payload = {
            result: null,
            error: error.name,
            errorData: error.message
        }
        res.send(response_payload)
    }
});



