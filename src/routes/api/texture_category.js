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
          t2.texture
          , count(t2.texture) AS count
          , c1.category_big_id
          , c2.category_middle_id
          , c3.category_small_id
        from 
          recipe_texture_445_hirakana as t1
          inner join textures_445_category_recognition as t2 using (texture_id)
          inner join textures_category_big    as c1 using (category_big_id)
          inner join textures_category_middle as c2 using (category_middle_id)
          inner join textures_category_small  as c3 using (category_small_id)
        where recipe_id = $1
        group by 1, 3, 4, 5
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
        obj["category_big_id"] = Number(item.category_big_id);
        obj["category_middle_id"] = Number(item.category_middle_id);
        obj["category_small_id"] = Number(item.category_small_id);
        json.push(obj);
      });

      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      // console.log(json);
      res.json(json);
    }
  })().catch(e => console.log(e.stack));
});

module.exports = router;
