var images = [];
var favImages = [];
var games = [];
var favGames = [];
var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

var imagePaths = [
  './img/videogames/celeste.png',
  './img/videogames/drthh.png',
  './img/videogames/ff8.png',
  './img/videogames/m3.png',
  './img/videogames/mario64.png',
  './img/videogames/plt.png',
  './img/videogames/sm.png',
  './img/videogames/tos.png',
  './img/videogames/twewy.png',
  './img/videogames/xc.png',
  './img/videogames/acnl.png',
  './img/videogames/mc.png',
  './img/videogames/smtds.png',
  './img/videogames/pikmin3.png',
  './img/videogames/ct.png',
  './img/videogames/aria.png',
  './img/videogames/dkc2.png',
  './img/videogames/tat.png',
  './img/videogames/messenger.png',
  './img/videogames/p3.png',
  './img/videogames/bw.png',
  './img/videogames/tp.png',
  './img/videogames/dr2.png',
  './img/videogames/ff1-2.png',
  './img/videogames/papermario.png',
  './img/videogames/ssbb.png',
  './img/videogames/xcx.png',
  './img/videogames/sov.png',
  './img/videogames/okamiden.png',
  './img/videogames/tla.png',
  './img/videogames/swsh.png',
  './img/videogames/oot.png',
  './img/videogames/aj.png',
  './img/videogames/sms.png',
  './img/videogames/pikmin.png',
  './img/videogames/ff5.png',
  './img/videogames/eb.png',
  './img/videogames/xc2.png',
  './img/videogames/drv3.png',
  './img/videogames/fusion.png',
  './img/videogames/frlg.png',
  './img/videogames/ssbu.png',
  './img/videogames/acnh.png',
  './img/videogames/dd.png',
  './img/videogames/portal.png',
  './img/videogames/ttyd.png',
  './img/videogames/minish.png',
  './img/videogames/pwaa.png',
  './img/videogames/dkc.png',
  './img/videogames/fea.png',
  './img/videogames/zm.png',
  './img/videogames/xy.png',
  './img/videogames/scds.png',
  './img/videogames/ssb4.png',
  './img/videogames/acww.png',
  './img/videogames/xc2tgc.png',
  './img/videogames/mother.png',
  './img/videogames/portal2.png',
  './img/videogames/galaxy.png',
  './img/videogames/pikmin2.png',
  './img/videogames/aoc.png',
  './img/videogames/yakuza0.png',
  './img/videogames/oneshot.png',
  './img/videogames/fe-rd.png',
  './img/videogames/kss-switch.png',
  './img/videogames/alttp-switch.png',
  './img/videogames/dqxis.png',
  './img/videogames/kdl3.png',
  './img/videogames/999.png',
  './img/videogames/cadence.png',
  './img/videogames/la.png',
  './img/videogames/mhrise.png',
  './img/videogames/balan.png',
  './img/videogames/kiwami.png',
  './img/videogames/evoland.png',
  './img/videogames/valhalla.png',
  './img/videogames/metroid sr.png'
];
var favImagePaths = ['./img/videogames/fe-por.png', './img/videogames/gs.png', './img/videogames/p5.png', './img/videogames/okami.png', './img/videogames/botw.png'];

class Game {
  constructor(image, title, series, platform, date, firstClear){
    this.image = image;
    this.title = title;
    this.series = series;
    this.platform = platform;
    this.date = date;
    this.firstClear = firstClear;
  }
}

function createImages(){
  imagePaths.forEach(function(image) {
    var img = document.createElement('img');
    img.src = image;
    img.className = "vg-icon";
    images.push(img);
  });
  
  favImagePaths.forEach(function(image) {
    var img = document.createElement('img');
    img.src = image;
    img.className = "vg-icon-fav";
    img.id = "img" + image.title;
    favImages.push(img);
  });
}

function createGames(){
  favGames.push(new Game(favImages[0], 'Path of Radiance','Fire Emblem', 'GameCube', new Date("Oct 15 2020")));
  favGames.push(new Game(favImages[1], 'Golden Sun','Golden Sun', 'Game Boy Advance'));
  favGames.push(new Game(favImages[2], 'Persona 5','Persona', 'Playstation 3'));
  favGames.push(new Game(favImages[3], 'Okami', 'Okami', 'Wii'));
  favGames.push(new Game(favImages[4], 'Breath of the Wild','Legend of Zelda, The', 'Wii U'));

  games.push(new Game(favImages[0], 'Path of Radiance','Fire Emblem', 'GameCube', new Date("Oct 15 2020")));
  games.push(new Game(favImages[1], 'Golden Sun','Golden Sun', 'Game Boy Advance', new Date("Aug 8 2020")));
  games.push(new Game(favImages[2], 'Persona 5','Persona', 'Playstation 3', new Date("1901")));
  games.push(new Game(favImages[3], 'Okami', 'Okami', 'Wii', new Date("1901")));
  games.push(new Game(favImages[4], 'Breath of the Wild','Legend of Zelda, The', 'Wii U', new Date("Sep 20 2020")));

  games.push(new Game(images[0], 'Celeste','', 'PC', new Date("1901")));
  games.push(new Game(images[1], 'Trigger Happy Havoc','Danganronpa', 'PC', new Date("1901")));
  games.push(new Game(images[2], 'Final Fantasy VIII','Final Fantasy', 'PC', new Date("1901")));
  games.push(new Game(images[3], 'Mother 3','EarthBound', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[4], 'Super Mario 64','Super Mario', 'Wii Virtual Console', new Date("Sep 24 2020")));
  games.push(new Game(images[5], 'Platinum','Pokémon', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[6], 'Super Metroid','Metroid', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[7], 'Tales of Symphonia','Tales', 'GameCube', new Date("1901")));
  games.push(new Game(images[8], 'The World Ends With You','The World Ends With You', 'Nintendo DS', new Date("Jul 16 2019")));
  games.push(new Game(images[9], 'Xenoblade Chronicles','Xenoblade Chronicles', 'Wii', new Date("1901")));
  games.push(new Game(images[10], 'New Leaf','Animal Crossing', 'Nintendo 3DS', new Date("1901")));
  games.push(new Game(images[11], 'Minecraft','Minecraft', 'PC', new Date("1901")));
  games.push(new Game(images[12], 'Devil Survivor Overclocked','Shin Megami Tensei', 'Nintendo 3DS', new Date("1901")));
  games.push(new Game(images[13], 'Pikmin 3','Pikmin', 'Wii U', new Date("Aug 6 2020")));
  games.push(new Game(images[14], 'Chrono Trigger','Chrono', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[15], 'Aria of Sorrow','Castlevania', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[16], 'Donkey Kong Country 2: Diddy\'s Kong Quest','Donkey Kong Country', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[17], 'Phoenix Wright: Trials and Tribulations','Ace Attorney', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[18], 'The Messenger', '', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[19], 'Persona 3 FES', 'Persona', 'Playstation 3', new Date("1901")));
  games.push(new Game(images[20], 'Black and White', 'Pokémon', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[21], 'Twilight Princess', 'Legend of Zelda, The', 'Wii', new Date("1901")));
  games.push(new Game(images[22], 'Danganronpa 2: Goodbye Despair', 'Danganronpa', 'PC', new Date("1901")));
  games.push(new Game(images[23], 'Final Fantasy I & II: Dawn of Souls', 'Final Fantasy', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[24], 'Paper Mario', 'Paper Mario', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[25], 'Super Smash Bros. Brawl', 'Super Smash Bros.', 'Wii', new Date("1901")));
  games.push(new Game(images[26], 'Xenoblade Chronicles X', 'Xenoblade Chronicles', 'Wii U', new Date("1901")));
  games.push(new Game(images[27], 'Echoes: Shadows of Valentia', 'Fire Emblem', 'Nintendo 3DS', new Date("1901")));
  games.push(new Game(images[28], 'Okamiden', 'Okami', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[29], 'The Lost Age', 'Golden Sun', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[30], 'Sword and Shield', 'Pokémon', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[31], 'Ocarina of Time', 'Legend of Zelda, The', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[32], 'Apollo Justice', 'Ace Attorney', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[33], 'Super Mario Sunshine', 'Super Mario', 'GameCube', new Date("1901")));
  games.push(new Game(images[34], 'Pikmin', 'Pikmin', 'Wii', new Date("1901")));
  games.push(new Game(images[35], 'Final Fantasy V', 'Final Fantasy', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[36], 'EarthBound', 'EarthBound', 'SNES', new Date("1901")));
  games.push(new Game(images[37], 'Xenoblade Chronicles 2', 'Xenoblade Chronicles', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[38], 'Danganronpa V3: Killing Harmony', 'Danganronpa', 'PC', new Date("1901")));
  games.push(new Game(images[39], 'Metroid Fusion', 'Metroid', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[40], 'FireRed and LeafGreen', 'Pokémon', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[41], 'Super Smash Bros. Ultimate', 'Super Smash Bros.', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[42], 'New Horizons', 'Animal Crossing', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[43], 'Dark Dawn', 'Golden Sun', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[44], 'Portal', 'Portal', 'PC', new Date("1901")));
  games.push(new Game(images[45], 'The Thousand Year Door', 'Paper Mario', 'GameCube', new Date("1901")));
  games.push(new Game(images[46], 'Minish Cap', 'Legend of Zelda, The', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[47], 'Phoenix Wright: Ace Attorney', 'Ace Attorney', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[48], 'Donkey Kong Country', 'Donkey Kong Country', 'Wii Virtual Console', new Date("1901")));
  games.push(new Game(images[49], 'Awakening', 'Fire Emblem', 'Nintendo 3DS', new Date("1901")));
  games.push(new Game(images[50], 'Zero Mission', 'Metroid', 'Game Boy Advance', new Date("1901")));
  games.push(new Game(images[51], 'X and Y', 'Pokémon', 'Nintendo 3DS', new Date("1901")));
  games.push(new Game(images[52], 'Sonic Colors', 'Sonic', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[53], 'Super Smash Bros. for Wii U', 'Super Smash Bros.', 'Wii U', new Date("1901")));
  games.push(new Game(images[54], 'Wild World', 'Animal Crossing', 'Nintendo DS', new Date("1901")));
  games.push(new Game(images[55], 'Xenoblade Chronicles 2: Torna The Golden Country', 'Xenoblade Chronicles', 'Nintendo Switch', new Date("1901")));
  games.push(new Game(images[56], 'EarthBound Beginnings', 'EarthBound', 'Wii U', new Date("1901")));
  games.push(new Game(images[57], 'Portal 2', 'Portal', 'PC', new Date("1901")));
  games.push(new Game(images[58], 'Super Mario Galaxy', 'Super Mario', 'Wii', new Date("1901")));
  games.push(new Game(images[59], 'Pikmin 2', 'Pikmin', 'Wii', new Date("1901")));
  games.push(new Game(images[60], 'Age of Calamity', 'Warriors', 'Nintendo Switch', new Date("Jan 13 2021"), "first"));
  games.push(new Game(images[61], 'Yakuza 0', 'Yakuza', 'PC', new Date("Jan 24 2021"), "first"));
  games.push(new Game(images[62], 'OneShot', '', 'PC', new Date("Jan 29 2021"), "first"));
  games.push(new Game(images[63], 'Radiant Dawn', 'Fire Emblem', 'Wii', new Date("Dec 27 2020")));
  games.push(new Game(images[64], 'Kirby Super Star', 'Kirby', 'Nintendo Switch Online', new Date("Aug 23 2020")));
  games.push(new Game(images[65], 'A Link to the Past', 'Legend of Zelda, The', 'Nintendo Switch Online', new Date("Apr 29 2020")));
  games.push(new Game(images[66], 'Dragon Quest XI S: Echoes of an Elusive Age - Definitive Edition', 'Dragon Quest', 'Nintendo Switch', new Date("1901"), "playing"));
  games.push(new Game(images[67], 'Kirby\'s Dream Land 3', 'Kirby', 'Nintendo Switch Online', new Date("Feb 7 2021")));
  games.push(new Game(images[68], 'Nine Hours, Nine Persons, Nine Doors', 'Zero Escape', 'Nintendo DS', new Date("Feb 3 2021"), "first"));
  games.push(new Game(images[69], 'Cadence of Hyrule: Crypt of the NecroDancer Featuring The Legend of Zelda', 'Crypt of the NecroDancer', 'Nintendo Switch', new Date("Jul 16 2019"), "first"));
  games.push(new Game(images[70], 'Link\'s Awakening', 'Legend of Zelda, The', 'Nintendo Switch', new Date("Sep 28 2019")));
  games.push(new Game(images[71], 'Monster Hunter Rise', 'Monster Hunter', 'Nintendo Switch', new Date("Apr 21 2021"), "first"));
  games.push(new Game(images[72], 'Balan Wonderworld', '', 'PC', new Date("May 5 2021"), "first"));
  games.push(new Game(images[73], 'Yakuza Kiwami', 'Yakuza', 'PC', new Date("May 20 2021"), "first"));
  games.push(new Game(images[74], 'Evoland', 'Evoland', 'Nintendo Switch', new Date("May 26 2021"), "first"));
  games.push(new Game(images[75], 'VA-11 HALL-A', '', 'PC', new Date("May 31 2021"), "first"));
  games.push(new Game(images[76], 'Metroid: Samus Returns', 'Metroid', 'Nintendo 3DS', new Date("June 18 2021"), "first"));

}

function displayGames() {
  var row = document.getElementById("game-display");
  var div;
  var divImg;
  var overlay;
  var text;
  var count = 0;
  var colNum = 5;

  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    colNum = 2;
  }
  else {
    
  }
  // 5 Favourite Games
  for (let i = 0; i < colNum; i++) {
    // Create col div
    div = document.createElement("div");
    div.className = "col";
    div.id = "col" + i;

    divImg = document.createElement("div");
    divImg.className = "image";
    favGames[i].image.id = favGames[i].title;
    // divImg.appendChild(favGames[i].image);

    // Overlay for text on hover
    overlay = document.createElement("div");
    overlay.className = "overlay";

    // Hover functions
    // overlay.onmouseenter = function(){
    //   var g = document.getElementById(favGames[i].title);
    //   g.style.transform = "scale(1.05)";
    //   g.style.transition = "0.2s ease";
    //   g.style.opacity = 0.6;
    // }
    // overlay.onmouseleave = function() {
    //   var g = document.getElementById(favGames[i].title);
    //   g.style.transform = "scale(1)";
    //   g.style.opacity = 1;
    // }

    // Text for on hover
    text = document.createElement("div");
    // text.className = "text";
    // text.innerHTML = favGames[i].title + "<br><br>" + favGames[i].series + "<br><br>" + favGames[i].platform + "<br><br>" + favGames[i].rating + "/10";
    
    overlay.appendChild(text);
    divImg.appendChild(overlay);
    div.appendChild(divImg);
    row.appendChild(div);
  }
  
  // Rest of the games
  for(let j = 0; j < games.length / colNum; j++) {
    var div;
    var col;
    var overlay;
    var text;
    var date;

    for (let k = 0; k < colNum; k++) {
      if (count > games.length - 1) {
        count = 0;
        break;
      }
      div = document.createElement("div");
      div.className = "image";

      col = document.getElementById("col" + k);

      overlay = document.createElement("div");
      overlay.className = "overlay";

      // If the date for the current game is valid and was beaten after the year 2005, else enter "N/A"
      if (checkDate(games[count].date) != false && games[count].date > "2005") {
        date = games[count].date.toLocaleDateString("en-US", options);
      }
      else {
        date = "N/A";
      }

      // If the game was beaten for the first time then change the image class
      if (games[count].firstClear == "first") {
        games[count].image.className = "vg-icon-new";
      }
      if (games[count].firstClear == "playing") {
        games[count].image.className = "vg-icon-progress";
      }

      // Create the text that appears on hover with the game properties
      text = document.createElement("div");
      text.className = "text";
      text.innerHTML = games[count].title + "<br><br>" + games[count].series + "<br><br>" + games[count].platform + "<br><br>" + date;
      console.log(games[count].title);
      games[count].image.id = games[count].title;
 
      // Hover functions
      overlay.onmouseenter = function(){
        var g = document.getElementById(games[colNum * j + k].title);
        g.style.transform = "scale(1.05)";
        g.style.opacity = 0.5;
        g.style.transition = "0.2s ease";
      }
      overlay.onmouseleave = function() {
        var g = document.getElementById(games[colNum * j + k].title);
        g.style.transform = "scale(1)";
        g.style.opacity = 1;
      }

      div.appendChild(games[count].image);
      overlay.appendChild(text);
      div.appendChild(overlay);
      col.appendChild(div);
      count++;
    }
  }
}

function sortGames(num) {
  // Remove and re-add the row div
  var ros = document.getElementById("game-display");
  ros.remove();
  var container = document.getElementById("game-container");
  var newRos = document.createElement("div");
  newRos.className = "row";
  newRos.id = "game-display";
  container.appendChild(newRos);

  // Sorting objects in the array.
  // 1: Title A-Z
  // 2: Series A-Z
  // 3: Platform A-Z
  // 4: Date Last Beat Descending
  // 5: Date Last Beat Ascending
  switch(num) {
    case 1:
      games = games.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
      break;
    case 2:
      games = games.sort((a,b) => (a.series > b.series) ? 1 : ((b.series > a.series) ? -1 : 0));
      break;
    case 3:
      games = games.sort((a,b) => (a.platform > b.platform) ? 1 : ((b.platform > a.platform) ? -1 : 0));
      break;
    case 4:
      games = games.sort((a,b) => (b.date > a.date) ? 1 : ((a.date > b.date) ? -1 : 0));
      break;
    case 5:
      games = games.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
      break;
  }
  displayGames();
}

// Check if date is valid date, return  boolean
function checkDate(date){
  return date.getTime() === date.getTime();
}

window.onload = function(){
  createImages();
  createGames();
  displayGames();
}