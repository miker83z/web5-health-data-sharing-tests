const axios = require('axios').default;

const verify = async (host,port,payload) => {
    try {
        return axios.post(host + ':' + port + '/stateless/verify', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.verify = verify