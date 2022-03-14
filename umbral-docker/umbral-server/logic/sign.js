const axios = require('axios').default;

const sign = async (host,port,payload) => {
    try {        
        return axios.post(host + ':' + port + '/stateless/sign', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.sign = sign