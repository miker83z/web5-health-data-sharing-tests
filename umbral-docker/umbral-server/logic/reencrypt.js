const axios = require('axios').default;

const reencrypt = async (host,port,payload) => {
    try {
        return axios.post(host + ':' + port + '/stateless/reencrypt', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.reencrypt = reencrypt