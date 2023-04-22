import AmagiClient from "../../client/AmagiClient";


module.exports =  {
    name: 'ready',
    once: true,
    async execute(client: AmagiClient) {
        console.log(client.success("SUCCESS: ") + `Logged in as ${client.user!.tag}!`);
    }
}