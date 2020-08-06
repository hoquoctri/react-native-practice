/*
EXAMPLE:


*/

//config http
//URL: https://localhost:8080
/*const DOMAIN_NAME = "jsonplaceholder.typicode.com";
const HTTP = "http://";
const HTTPS = "https://";
const PORT = "8080";
const DEFAULT_PORT = "443";
*/

//Basic Authorize
const USER_NAME = "admin";
const PASSWORD = "admin";

//Header
const HEADER = {
    "Accept":	"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding":	"gzip, deflate, br",
    "Accept-Language":	"en-US,en;q=0.5",
    "Connection":	"keep-alive",
    "Host":	"jsonplaceholder.typicode.com",
    "Upgrade-Insecure-Requests":	"1",
    "User-Agent":	"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0"
};

const TIME_OUT = 30000;

export default {
    USER_NAME,
    PASSWORD,
    HEADER,
    TIME_OUT
}