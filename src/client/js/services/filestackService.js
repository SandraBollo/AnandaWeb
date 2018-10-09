
import * as filestack from 'filestack-js'

const apikey = 'AVqf8x4qYTE8gIq3WoXWwz';
const client = filestack.init(apikey);


export function uploadFile(someFile){
  return client.upload(someFile)
}
