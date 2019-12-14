import express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import url from "url";
import _ from "lodash";
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

// function delay(ms, result) {
//   return new Promise(resolve => setTimeout(resolve, ms, result));
// }

interface WordDataCategory {
  text: string;
  value: number;
  category_big_id: number;
  category_middle_id: number;
  category_small_id: number;
}

router.get("/", (req: Request, res: Response, next: NextFunction) => {
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

    if (result.rowCount === 0) {
      console.log("------> 該当するレシピはありませんでした．");
      res.redirect(302, `${process.env.HOST}:${process.env.PORT}/noresult`);
    } else {
      client.release();

      const json: WordDataCategory[] = [];
      result.rows.map(item => {
        const obj: WordDataCategory = {
          text: item.texture,
          value: Number(item.count),
          category_big_id: Number(item.category_big_id),
          category_middle_id: Number(item.category_middle_id),
          category_small_id: Number(item.category_small_id)
        };
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

// module.exports = router;
export default router;
