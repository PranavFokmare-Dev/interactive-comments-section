
export async function getUserImage(imageId:string):Promise<any>{
    const x = require(`../images/avatars/${imageId}`);
    return x;
}