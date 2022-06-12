const axios = require('axios').default;

const generateKfrags = async (host,port,payload) => {
    try {
        return axios.post(host + ':' + port + '/stateless/kfrags', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.generateKfrags = generateKfrags