import express from "express";
import { NextFunction, Request, Response } from "express";
const router = express.Router();
import url from "url";
import _ from "lodash";
import { Pool } from "pg";
const pool = new Pool({
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

// function delay(ms, result) {
//   return new Promise(resolve => setTimeout(resolve, ms, result));
// }

interface WordData {
  text: string;
  value: number;
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

    if (result.rowCount === 0) {
      console.log("------> 該当するレシピはありませんでした．");
      res.redirect(302, "localhost:3000/noresult");
    } else {
      client.release();

      const json: WordData[] = [];
      result.rows.map(item => {
        const obj: WordData = { text: item.texture, value: Number(item.count) };
        // obj.text = item.texture;
        // obj.value = Number(item.count);
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

// module.exports = router;
export default router;
