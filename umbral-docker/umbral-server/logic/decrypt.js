const axios = require('axios').default;

const decrypt = async (host,port,payload) => {
    try {
        return axios.post(host + ':' + port + '/stateless/keypair', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.decrypt = decrypt