import { Service } from "./service.js";

export class controller{
    constructor() {
        this.service = new Service()
    }
    
    async getFileStream(filename){
        return this.service.getFileStream(filename)
    }
}