const axios = require('axios').default;

const requestKeypair = async (host,port) => {
    try {
        return axios.get(host + ':' + port + '/stateless/keypair');
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.requestKeypair = requestKeypair