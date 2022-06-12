const axios = require('axios').default;

const requestSigner = async (host,port) => {
    try {
        return axios.get(host + ':' + port + '/stateless/signer');
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.requestSigner = requestSigner