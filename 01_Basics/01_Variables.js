const accountId = 144553
let accountEmail = "akash_00003@google.com"
var accountPassword = "123456"
accountCity = "Bhilai"
let accountState
// accountId=2 // not allowed changes for the constants declared


accountEmail = "aka.com"
accountPassword = "5566231"
accountCity = "Hyderabad"


/* NOTE:- Prefer Not to use var because of issue in block scope and functional scope


*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
