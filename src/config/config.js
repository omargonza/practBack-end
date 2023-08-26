import * as dotenv from "dotenv";

dotenv.config({
  path: "src/config/.env",
});

//entorno
const NODE_ENV = process.env.NODE_ENV || "development";

//server

const PORT = process.env.PORT;

//persitencia
const PERSISTENCIA = process.env.PERSISTENCIA;

const MONGODB_CNX_STR =
  process.env.MONGODB_CNX_STR || "mongodb://127.0.0.1:27017/River";

//auth
const JWT_PRIVATE_KEY = "riverelmasgrande";
const COOKIE_KEY = "gonza10";

const CLIENTID_GIT =  "14f6883eeaaafc857d42cf53dde6bfa78fd82a9b";

const CLIENTSCR_GIT = "66ecb53e88845fc9d2612de2347becf167d746e9";

const SESSION_SECRET = "loesencialesinvisiblealosojos";

//email
const PROD_CONFIG_EMAIL = {
  service: "gmail",
  port: 587,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
};

const TEST_CONFIG_EMAIL = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.TEST_EMAIL_USER,
    pass: process.env.TEST_EMAIL_PASS,
  },
};

let CONFIG_EMAIL;
if (NODE_ENV === "production") {
  CONFIG_EMAIL = PROD_CONFIG_EMAIL;
} else {
  CONFIG_EMAIL = TEST_CONFIG_EMAIL;
}

//views
const PATH_NEW_PRODUCT = process.env.PATH_NEW_PRODUCT;
const PATH_PRODUCT = process.env.PATH_PRODUCT;
const PATH_CARTS = process.env.PATH_CARTS;
const PATH_LOGIN = process.env.PATH_LOGIN;
const PATH_REGIS = process.env.PATH_REGIS;
const PATH_CHAT = process.env.PATH_CHAT;
const PATH_TICKET = process.env.PATH_TICKET;
const PATH_FORGOT = process.env.PATH_FORGOT;
const PATH_RECOVER = process.env.PATH_RECOVER;
const PATH_PROFILE = process.env.PATH_PROFILE;
const PATH_DOCUMENTS = process.env.PATH_DOCUMENTS;
const PATH_USERS = process.env.PATH_USERS;

export {
  NODE_ENV,
  PORT,
  PERSISTENCIA,
  MONGODB_CNX_STR,
  COOKIE_KEY,
  JWT_PRIVATE_KEY,
  CLIENTID_GIT,
  CLIENTSCR_GIT,
  SESSION_SECRET,
  CONFIG_EMAIL,
  PATH_CARTS,
  PATH_LOGIN,
  PATH_NEW_PRODUCT,
  PATH_PRODUCT,
  PATH_REGIS,
  PATH_CHAT,
  PATH_TICKET,
  PATH_FORGOT,
  PATH_RECOVER,
  PATH_PROFILE,
  PATH_DOCUMENTS,
  PATH_USERS,
};
