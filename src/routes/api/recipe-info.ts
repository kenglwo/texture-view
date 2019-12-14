import * as express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import * as url from "url";
import * as _ from "lodash";
import { Pool } from "pg";
// const pool = new Pool({
//   user: "postgres",
//   host: "10.83.53.106",
//   database: "postgres",
//   password: "5931IT",
//   port: 5432
// });
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: Number(process.env.DB_PORT)
});
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

interface RecipeInfo {
  recipe_id: string;
  title: string;
  description: string;
  advice: string;
  recipe_count: number;
  texture_count: number;
}

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const query = url.parse(req.url, true).query;
  const keyword = query.keyword;
  const texture = query.texture;
  const offset = 0;

  const RECIPE_INFO: RecipeInfo[] = [];

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
        [`%${keyword}%`, texture, offset]
      );
      // ["%" + keyword + "%", texture, offset]

      if (result.rowCount !== 0) {
        console.log(`------> 検索結果: ${result.rows[0].recipe_count} 件`);
      } else {
        console.log("------> 該当するレシピはありませんでした．");
        // res.redirect(302, "http://kento/ex-gen-app/noresult");
        res.redirect(302, `${process.env.HOST}:${process.env.PORT}/noresult`);
      }

      _.forEach(result.rows, elem => {
        const description = elem.description.trim();
        const advice = elem.advice.trim();

        const RECIPE_JSON = {
          recipe_id: elem.recipe_id,
          title: elem.title,
          description,
          advice,
          recipe_count: elem.recipe_count,
          texture_count: elem.texture_count
        };
        RECIPE_INFO.push(RECIPE_JSON);
      });
    } finally {
      client.release();
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.json(RECIPE_INFO);
    }
  })().catch(e => console.log(e.stack));
});

// module.exports = router;
export default router;
