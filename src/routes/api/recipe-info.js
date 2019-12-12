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

router.get("/", function(req, res, next) {
  const query = url.parse(req.url, true).query;
  const keyword = query.keyword;
  const texture = query.texture;
  const offset = 0;

  let recipe_info = [];

  (async () => {
    const client = await pool.connect();

    try {
      const result = await client.query(
        `
        select 
          m.recipe_id,
          m.title,
          m.description,
          m.advice,
          count(t.texture) as texture_count,
          count(m.recipe_id) over() as recipe_count
        from (
            select recipe_id, title, description, advice
            from recipes
            where title like $1
            group by recipe_id, title, description, advice
        ) as m
        , recipe_texture_445 as t
        where
          m.recipe_id = t.recipe_id
          and t.texture = $2
        group by 
          m.recipe_id,
          m.title,
          m.description,
          m.advice
        having count(t.texture) > 0
        order by count(t.texture) desc
        limit 10 offset $3 ;`,
        ["%" + keyword + "%", texture, offset]
      );

      if (result["rowCount"] != 0) {
        console.log(
          "------> 検索結果: " + result["rows"][0]["recipe_count"] + "件"
        );
      } else {
        console.log("------> 該当するレシピはありませんでした．");
        // res.redirect(302, "http://kento/ex-gen-app/noresult");
        res.redirect(302, "localhost:3000/noresult");
      }

      _.forEach(result["rows"], elem => {
        const description = elem["description"].trim();
        const advice = elem["advice"].trim();

        let recipe_json = {
          recipe_id: elem["recipe_id"],
          title: elem["title"],
          description: description,
          advice: advice,
          recipe_count: elem["recipe_count"],
          texture_count: elem["texture_count"]
        };
        recipe_info.push(recipe_json);
      });
    } finally {
      client.release();
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.json(recipe_info);
    }
  })().catch(e => console.log(e.stack));
});

module.exports = router;
