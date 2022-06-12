const axios = require('axios').default;

const encrypt = async (host,port,payload) => {
    try {
        return axios.post(host + ':' + port + '/stateless/encrypt', payload);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        return error.message;
    }
}

exports.encrypt = encrypt