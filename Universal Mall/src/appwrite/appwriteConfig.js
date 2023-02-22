import { Account, Client} from "appwrite";

const client= new Client();
client.setEndpoint('http://localhost/v1').setProject('63f61a9bc56a26ffc27e');

export const account = new Account(client)

