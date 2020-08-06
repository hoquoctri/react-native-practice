import axios from "axios";
import vcareClient from "./VcareApiClient"

 function getUserInfo () {
  let userInfoList = vcareClient.test('https://jsonplaceholder.typicode.com/users');
  //return userInfoList;
}

export default {
  getUserInfo
}
