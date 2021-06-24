const oriapi = require("oriapi");
const dbl = new oriapi("TOKEN-HERE", client);

client.on("ready", async () => {
  dbl.serverCount();
  // console.log("Server count posted")
  let hasVote = await dbl.hasVoted("BOT-ID-HERE");
  if(hasVote === true) {
    console.log("Voted");
  } else {
    console.log("Vote please.");
  }
  
  
  let search = await dbl.search("BOT-ID-HERE");
  console.log(search);
});
