import app from "./Server";
// import { logger } from "./shared/Logger";

// Start the server
// const port = Number(process.env.PORT || 3001);
const port = Number(process.env.PORT);
app.listen(port, () => {
  // logger.info(`Express server started on port: ${port}`);
  console.log(`Access localhost:${process.env.PORT}/router`);
});
