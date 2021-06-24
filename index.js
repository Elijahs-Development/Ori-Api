const fetch = require("node-fetch");
module.exports = class UDL {
  constructor(token, client) {
    this['ORIBOTS-TOKEN'] = token;
    this['client id'] = client;
    return this;
  }

  serverCount(message) {
  fetch(`https://oribots.tk/api/bots/stats`, {
        method: 'POST',
        headers: { 
          'serverCount': this.client.guilds.cache.size,
          'Content-Type': 'application/json', 
          'Authorization': this.token
        },
    })
    .then(console.log(message || "Server count posted."));
  }
  
  async search(id) {
  return await fetch(`https://oribots.tk/api/bots/${id}`, {
        method: 'GET'
    })
    .then(res => res.json()).then(json => json);
  }
  
  async hasVoted(id) {
  return await fetch(`https://oribots.tk/api/bots/check/${id}`, {method: 'GET',headers: { 
    'Content-Type': 'application/json', 'Authorization': this.token
  }
  }).then(res => res.json()).then(async json => json.voted);
  }
}
