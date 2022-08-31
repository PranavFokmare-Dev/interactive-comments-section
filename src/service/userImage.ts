import { IUser } from "../Models/UserModel";

export async function getUserImage(imageId:string):Promise<any>{
    const x = require(`../images/avatars/${imageId}`);
    return x;
}
const userData = JSON.parse(`{
    "image": { 
      "png": "image-juliusomo.png",
      "webp": "image-juliusomo.webp"
    },
    "username": "juliusomo"
  }`);
export async function getUserInfo():Promise<IUser>{
    return userData;   
}