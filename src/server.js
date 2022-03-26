const app = require("./index");

const connect = require("./configs/db");





app.listen(4300, async function () {
  try{
  await connect();
  console.log("listening on port 4300");
  } catch (err){
  consoleerror(err.messege);
}
});
