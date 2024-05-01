import pokelist from "./pokelist"
let top = pokelist.slice(0,pokelist.length/2);
let bottom = pokelist.slice(pokelist.length/2);

let topScore = top.map(x=>x = x.base_experience).reduce((a,b)=>a+b,0);
let bottomScore = bottom.map(x=>x = x.base_experience).reduce((a,b)=>a+b,0);

let isBottomWin = bottomScore> topScore ? "WİN" : "LOSE";
let isTopWin = bottomScore < topScore ? "WİN" : "LOSE";

export {isBottomWin,isTopWin} ;