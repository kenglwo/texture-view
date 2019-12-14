import * as express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import * as url from "url";
import * as _ from "lodash";
import { Pool } from "pg";
import { WordCloudCategoryArrayElement } from "../../components/models/Types";
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

// interface WordDataCategoryArray {
//   text: string;
//   value: number;
//   recognition_rate: number;
//   category_big_id_array: number[];
//   category_middle_id_array: number[];
//   category_small_id_array: number[];
// }

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const query = url.parse(req.url, true).query;
  const recipe_id = query.recipe_id;

  (async () => {
    const client = await pool.connect();

    // try {
    const result = await client.query(
      `
        with tmp as (
          select
            t2.texture as texture
            , count(t2.texture) as count
            , t2.recognition_rate as recognition_rate
            , t3.category_big_id as category_big
            , t4.category_middle_id as category_middle
            , t5.category_small_id as category_small
          from
            recipe_texture_445_hirakana as t1
            inner join textures_445_category_recognition as t2 using(texture_id)
            inner join textures_category_big     as t3 using(category_big_id)
            inner join textures_category_middle  as t4 using(category_middle_id)
            inner join textures_category_small   as t5 using(category_small_id)
          where
            recipe_id=$1
          group by 1, 3, 4, 5, 6
          order by count desc
          )

        select
          texture
          , count
          , recognition_rate
          , array_agg(category_big) as category_big_id_array
          , array_agg(category_middle) as category_middle_id_array
          , array_agg(category_small) as category_small_id_array
        from
          tmp
        group by 1, 2, 3
        order by count desc
        ;
    `,
      [recipe_id]
    );

    if (result.rowCount === 0) {
      console.log("------> 該当するレシピはありませんでした．");
      res.redirect(302, `${process.env.HOST}:${process.env.PORT}/noresult`);
    } else {
      client.release();

      const json: WordCloudCategoryArrayElement[] = [];
      result.rows.map(item => {
        const obj: WordCloudCategoryArrayElement = {
          text: String(item.texture),
          value: Number(item.count),
          recognition_rate: Number(item.recognition_rate),
          category_big_id_array: item.category_big_id_array,
          category_middle_id_array: item.category_middle_id_array,
          category_small_id_array: item.category_small_id_array
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
