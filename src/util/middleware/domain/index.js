const domain = require("../../../app/models/Domain");
var mysql = require("mysql");
var url = require("url");

function confirmDomain(req, res, next) {
  // let reqDomain = req.hostname;
  let reqDomain = req.headers["x-forwarded-host"];
  if (req.headers["host"]) {
    reqDomain = req.headers["host"];
  }
  // let reqDomain = req.headers;
  //   res.send(req.headers)
  //   return;
  //   console.log(req.headers);
  if (req.isApi) {
    reqDomain = "new.taixecongnghe.com";
  }

  // reqDomain = 'new.taixecongnghe.com';

  console.log(reqDomain);
  domain.checkDomain(reqDomain, (err, results, fields) => {

   
    
      const dbName = 'bafzmishkw4tibaxnamp';

      if (!pool[dbName]) {
        const dbConfig = {
          host: "bafzmishkw4tibaxnamp-mysql.services.clever-cloud.com",
          port: "3306",
          user: "usz36ahjbnmtbqyn",
          password: "1YrvUF4TgWRHA1NnBcZT",
          database: dbName,
          multipleStatements: true,
          charset: "utf8mb4",
        };
        pool[dbName] = mysql.createPool(dbConfig);
      }

      req.dbName = dbName;
      req.reqDomain = reqDomain;

      next();
   
  });
}
module.exports = confirmDomain;