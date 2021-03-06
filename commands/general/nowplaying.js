const fetch = require("node-fetch");

module.exports = {
    ownerOnly: false,
    config: {
        name: "nowplaying",
        aliases: ["np"],
    }, 
    run: async (client, channel, tags, args, language) => {
        const { menu } = await fetch(`http://127.0.0.1:24050/json`).then(response => response.json()); //<== requirement gosumemory to working!
        const title = menu.bm.metadata.title; // this all api wrapper
        const ar = menu.bm.stats.AR;
        const cs = menu.bm.stats.CS;
        const od = menu.bm.stats.OD;
        const hp = menu.bm.stats.HP;
        const star = menu.bm.stats.SR;
        const bpm = menu.bm.stats.BPM.max;
        const link = menu.bm.set;
        const mods = menu.mods.str;
        const rarity = menu.bm.id;
    
        client.say(channel, client.i18n.get(language, "nowplaying", "message", {
            title: title,
            ar: ar,
            cs: cs,
            od: od,
            hp: hp,
            star: star,
            bpm: bpm,
            link: link,
            mods: mods,
            rarity: rarity,
        }));
    }
}