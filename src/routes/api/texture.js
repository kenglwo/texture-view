const express = require("express"),
  router = express.Router(),
  url = require("url"),
  _ = require("lodash"),
  { Pool } = require("pg"),
  pool = new Pool({
    user: "postgres",
    host: "10.83.53.106",
    database: "postgres",
    password: "5931IT",
    port: 5432
  });
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

function delay(ms, result) {
  return new Promise(resolve => setTimeout(resolve, ms, result));
}

router.get("/", function(req, res, next) {
  const query = url.parse(req.url, true).query;
  const recipe_id = query.recipe_id;

  (async () => {
    const client = await pool.connect();

    // try {
    const result = await client.query(
      `
        select 
          texture,
          count(texture) AS count
        from 
          recipe_texture_445
        where recipe_id = $1
        group by texture
        order by count desc;
      `,
      [recipe_id]
    );

    if (result["rowCount"] == 0) {
      console.log("------> 該当するレシピはありませんでした．");
      res.redirect(302, "localhost:3000/noresult");
    } else {
      client.release();

      const json = [];
      result["rows"].map(item => {
        let obj = {};
        obj["text"] = item.texture;
        obj["value"] = Number(item.count);
        json.push(obj);
      });

      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      console.log(json);
      res.json(json);
    }
  })().catch(e => console.log(e.stack));
});

module.exports = router;
