import axios from "axios";

export class MessagesRepository {
    async getRandomMessage() {
        const resp = await axios.get('https://catfact.ninja/fact')
        const {fact} = resp.data;
        return fact;
    }
}