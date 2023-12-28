// src/ReplicateClient.js
import Replicate from 'replicate';

export default class ReplicateClient {
    constructor(apiToken) {
        this.replicate = new Replicate({
            auth: apiToken,
        });
    }

    async getResponse(modelName, inputOptions) {
        try {
            const output = await this.replicate.run(modelName, inputOptions);
            return output;
        } catch (error) {
            console.error('Error fetching response from Replicate:', error);
            throw error;
        }
    }
}
