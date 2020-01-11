import * as express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import * as url from "url";
import * as _ from "lodash";
import { Pool } from "pg";
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

import { RecipeItemKeyword } from "../../components/models/Types";

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const query = url.parse(req.url, true).query;
  const keyword = query.keyword;
  const offset = 0;

  const RECIPE_INFO: RecipeItemKeyword[] = [];

  (async () => {
    const client = await pool.connect();

    try {
      const result = await client.query(
        `
        select
          t1.recipe_id
          , substr(t1.user_id, 1,5) as user_id
          , t1.title
          , t1.description
          , t2.review_count
          , t2.texture_count
          , t2.sizzle_count
          , t2.thanks_count
          , count(*) over() as recipe_count
        from
          recipes as t1
          inner join recipe_review_info as t2 using(recipe_id)
        where
          t1.title like $1
        group by
          1,2,3,4,5,6,7,8
        limit 10 offset $2 ;`,
        [`%${keyword}%`, offset]
      );

      if (result.rowCount !== 0) {
        console.log(`------> 検索結果: ${result.rows[0].recipe_count} 件`);
      } else {
        console.log("------> 該当するレシピはありませんでした．");
        // res.redirect(302, "http://kento/ex-gen-app/noresult");
        res.redirect(302, `${process.env.HOST}:${process.env.PORT}/noresult`);
      }

      _.forEach(result.rows, elem => {
        const RECIPE_JSON: RecipeItemKeyword = {
          recipe_id: elem.recipe_id.trim(),
          user_id: elem.user_id.trim(),
          title: elem.title.trim(),
          description: elem.description.trim(),
          recipe_count: elem.recipe_count,
          review_count: elem.review_count,
          texture_count: elem.texture_count,
          sizzle_count: elem.sizzle_count,
          thanks_count: elem.thanks_count
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
