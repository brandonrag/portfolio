var images = [];
var favImages = [];
var games = [];
var favGames = [];

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
  './img/videogames/pikmin2.png'
];
var favImagePaths = ['./img/videogames/fe-por.png', './img/videogames/gs.png', './img/videogames/p5.png', './img/videogames/okami.png', './img/videogames/botw.png'];

class Game {
  constructor(image, title, series, platform, rating){
    this.image = image;
    this.title = title;
    this.series = series;
    this.platform = platform;
    this.rating = rating;
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
  favGames.push(new Game(favImages[0], 'Path of Radiance','Fire Emblem', 'GameCube', 10));
  favGames.push(new Game(favImages[1], 'Golden Sun','Golden Sun', 'Game Boy Advance', 10));
  favGames.push(new Game(favImages[2], 'Persona 5','Persona', 'Playstation 3', 10));
  favGames.push(new Game(favImages[3], 'Okami', 'Okami', 'Wii', 10));
  favGames.push(new Game(favImages[4], 'Breath of the Wild','Legend of Zelda, The', 'Wii U', 9));

  games.push(new Game(images[0], 'Celeste','', 'PC', 10));
  games.push(new Game(images[1], 'Trigger Happy Havoc','Danganronpa', 'PC', 7));
  games.push(new Game(images[2], 'Final Fantasy VIII','Final Fantasy', 'PC', 8));
  games.push(new Game(images[3], 'Mother 3','EarthBound', 'Game Boy Advance', 10));
  games.push(new Game(images[4], 'Super Mario 64','Super Mario', 'Wii Virtual Console', 8));
  games.push(new Game(images[5], 'Platinum','Pokémon', 'Nintendo DS', 10));
  games.push(new Game(images[6], 'Super Metroid','Metroid', 'Wii Virtual Console', 10));
  games.push(new Game(images[7], 'Tales of Symphonia','Tales', 'GameCube', '10/10'));
  games.push(new Game(images[8], 'The World Ends With You','The World Ends With You', 'Nintendo DS', 10));
  games.push(new Game(images[9], 'Xenoblade Chronicles','Xenoblade Chronicles', 'Wii', 10));
  games.push(new Game(images[10], 'New Leaf','Animal Crossing', 'Nintendo 3DS', 9));
  games.push(new Game(images[11], 'Minecraft','Minecraft', 'PC', '7/10'));
  games.push(new Game(images[12], 'Devil Survivor Overclocked','Shin Megami Tensei', 'Nintendo 3DS', 9));
  games.push(new Game(images[13], 'Pikmin 3','Pikmin', 'Wii U', 9));
  games.push(new Game(images[14], 'Chrono Trigger','Chrono', 'Wii Virtual Console', 10));
  games.push(new Game(images[15], 'Aria of Sorrow','Castlevania', 'Game Boy Advance', 10));
  games.push(new Game(images[16], 'Donkey Kong Country 2: Diddy\'s Kong Quest','Donkey Kong Country', 'Wii Virtual Console', 10));
  games.push(new Game(images[17], 'Phoenix Wright: Trials and Tribulations','Ace Attorney', 'Nintendo DS', 10));
  games.push(new Game(images[18], 'The Messenger', '', 'Nintendo Switch', 10));
  games.push(new Game(images[19], 'Persona 3 FES', 'Persona', 'Playstation 3', 9));
  games.push(new Game(images[20], 'Black and White', 'Pokémon', 'Nintendo DS', 9));
  games.push(new Game(images[21], 'Twilight Princess', 'Legend of Zelda, The', 'Wii', '10/10'));
  games.push(new Game(images[22], 'Danganronpa 2: Goodbye Despair', 'Danganronpa', 'PC', 7));
  games.push(new Game(images[23], 'Final Fantasy I & II: Dawn of Souls', 'Final Fantasy', 'Game Boy Advance', 7));
  games.push(new Game(images[24], 'Paper Mario', 'Paper Mario', 'Wii Virtual Console', 9));
  games.push(new Game(images[25], 'Super Smash Bros. Brawl', 'Super Smash Bros.', 'Wii', 9));
  games.push(new Game(images[26], 'Xenoblade Chronicles X', 'Xenoblade Chronicles', 'Wii U', 9));
  games.push(new Game(images[27], 'Echoes: Shadows of Valentia', 'Fire Emblem', 'Nintendo 3DS', 9));
  games.push(new Game(images[28], 'Okamiden', 'Okami', 'Nintendo DS', 8));
  games.push(new Game(images[29], 'The Lost Age', 'Golden Sun', 'Game Boy Advance', 10));
  games.push(new Game(images[30], 'Sword and Shield', 'Pokémon', 'Nintendo Switch', 7));
  games.push(new Game(images[31], 'Ocarina of Time', 'Legend of Zelda, The', 'Wii Virtual Console', 10));
  games.push(new Game(images[32], 'Apollo Justice', 'Ace Attorney', 'Wii Virtual Console', 7));
  games.push(new Game(images[33], 'Super Mario Sunshine', 'Super Mario', 'GameCube', 7));
  games.push(new Game(images[34], 'Pikmin', 'Pikmin', 'Wii', 8));
  games.push(new Game(images[35], 'Final Fantasy V', 'Final Fantasy', 'Game Boy Advance', 7));
  games.push(new Game(images[36], 'EarthBound', 'EarthBound', 'SNES', 8));
  games.push(new Game(images[37], 'Xenoblade Chronicles 2', 'Xenoblade Chronicles', 'Nintendo Switch', 8));
  games.push(new Game(images[38], 'Danganronpa V3: Killing Harmony', 'Danganronpa', 'PC', 8));
  games.push(new Game(images[39], 'Metroid Fusion', 'Metroid', 'Game Boy Advance', 9));
  games.push(new Game(images[40], 'FireRed and LeafGreen', 'Pokémon', 'Game Boy Advance', 8));
  games.push(new Game(images[41], 'Super Smash Bros. Ultimate', 'Super Smash Bros.', 'Nintendo Switch', 9));
  games.push(new Game(images[42], 'New Horizons', 'Animal Crossing', 'Nintendo Switch', 8));
  games.push(new Game(images[43], 'Dark Dawn', 'Golden Sun', 'Nintendo DS', 9));
  games.push(new Game(images[44], 'Portal', 'Portal', 'PC', 9));
  games.push(new Game(images[45], 'The Thousand Year Door', 'Paper Mario', 'GameCube', 10));
  games.push(new Game(images[46], 'Minish Cap', 'Legend of Zelda, The', 'Game Boy Advance', 10));
  games.push(new Game(images[47], 'Phoenix Wright: Ace Attorney', 'Ace Attorney', 'Nintendo DS', 9));
  games.push(new Game(images[48], 'Donkey Kong Country', 'Donkey Kong Country', 'Wii Virtual Console', 9));
  games.push(new Game(images[49], 'Awakening', 'Fire Emblem', 'Nintendo 3DS', 7));
  games.push(new Game(images[50], 'Zero Mission', 'Metroid', 'Game Boy Advance', 8));
  games.push(new Game(images[51], 'X and Y', 'Pokémon', 'Nintendo 3DS', 7));
  games.push(new Game(images[52], 'Sonic Colors', 'Sonic', 'Nintendo DS', 8));
  games.push(new Game(images[53], 'Super Smash Bros. for Wii U', 'Super Smash Bros.', 'Wii U', 8));
  games.push(new Game(images[54], 'Wild World', 'Animal Crossing', 'Nintendo DS', 7));
  games.push(new Game(images[55], 'Xenoblade Chronicles 2: Torna The Golden Country', 'Xenoblade Chronicles', 'Nintendo Switch', 10));
  games.push(new Game(images[56], 'EarthBound Beginnings', 'EarthBound', 'Wii U', 7));
  games.push(new Game(images[57], 'Portal 2', 'Portal', 'PC', 10));
  games.push(new Game(images[58], 'Super Mario Galaxy', 'Super Mario', 'Wii', 8));
  games.push(new Game(images[59], 'Pikmin 2', 'Pikmin', 'Wii', 7));

}

function displayGames() {
  var row = document.getElementById("game-display");
  var div;
  var divImg;
  var overlay;
  var text;
  var count = 0;
  var colNum = 5;

  if ( /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    colNum = 2;
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
    divImg.appendChild(favGames[i].image);

    // Overlay for text on hover
    overlay = document.createElement("div");
    overlay.className = "overlay";

    // Hover functions
    overlay.onmouseenter = function(){
      var g = document.getElementById(favGames[i].title);
      g.style.transform = "scale(1.05)";
      g.style.transition = "0.2s ease";
      g.style.opacity = 0.6;
    }
    overlay.onmouseleave = function() {
      var g = document.getElementById(favGames[i].title);
      g.style.transform = "scale(1)";
      g.style.opacity = 1;
    }

    // Text for on hover
    text = document.createElement("div");
    text.className = "text";
    text.innerHTML = favGames[i].title + "<br><br>" + favGames[i].series + "<br><br>" + favGames[i].platform + "<br><br>" + favGames[i].rating + "/10";
    
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

      text = document.createElement("div");
      text.className = "text";
      text.innerHTML = games[count].title + "<br><br>" + games[count].series + "<br><br>" + games[count].platform + "<br><br>" + games[count].rating + "/10";
    
      games[count].image.id = games[count].title;
 
      // Hover functions
      overlay.onmouseenter = function(){
        var g = document.getElementById(games[5 * j + k].title);
        g.style.transform = "scale(1.05)";
        g.style.opacity = 0.6;
        g.style.transition = "0.2s ease";
      }
      overlay.onmouseleave = function() {
        var g = document.getElementById(games[5 * j + k].title);
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
    case 5:
      games = games.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0));
      break;
    case 4:
      games = games.sort((a,b) => (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0));
      break;
  }
  displayGames();
}

window.onload = function(){
  createImages();
  createGames();
  displayGames();
}