import { MONGO_DB, MONGO_PASSWORD, MONGO_USERNAME } from "./config";

export const connectionStr = "mongodb+srv://"+MONGO_USERNAME+":"+MONGO_PASSWORD+"@jobcluster.tu8yulz.mongodb.net/"+MONGO_DB+"?retryWrites=true&w=majority&appName=JobCluster";
