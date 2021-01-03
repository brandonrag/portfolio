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

  games.push(new Game(favImages[0], 'Path of Radiance','Fire Emblem', 'GameCube', 10));
  games.push(new Game(favImages[1], 'Golden Sun','Golden Sun', 'Game Boy Advance', 10));
  games.push(new Game(favImages[2], 'Persona 5','Persona', 'Playstation 3', 10));
  games.push(new Game(favImages[3], 'Okami', 'Okami', 'Wii', 10));
  games.push(new Game(favImages[4], 'Breath of the Wild','Legend of Zelda, The', 'Wii U', 9));

  games.push(new Game(images[5], 'Celeste','', 'PC', 10));
  games.push(new Game(images[6], 'Trigger Happy Havoc','Danganronpa', 'PC', 7));
  games.push(new Game(images[7], 'Final Fantasy VIII','Final Fantasy', 'PC', 8));
  games.push(new Game(images[8], 'Mother 3','EarthBound', 'Game Boy Advance', 10));
  games.push(new Game(images[9], 'Super Mario 64','Super Mario', 'Wii Virtual Console', 8));
  games.push(new Game(images[10], 'Platinum','Pokémon', 'Nintendo DS', 10));
  games.push(new Game(images[11], 'Super Metroid','Metroid', 'Wii Virtual Console', 10));
  games.push(new Game(images[12], 'Tales of Symphonia','Tales', 'GameCube', '10/10'));
  games.push(new Game(images[13], 'The World Ends With You','The World Ends With You', 'Nintendo DS', 10));
  games.push(new Game(images[14], 'Xenoblade Chronicles','Xenoblade Chronicles', 'Wii', 10));
  games.push(new Game(images[15], 'New Leaf','Animal Crossing', 'Nintendo 3DS', 9));
  games.push(new Game(images[16], 'Minecraft','Minecraft', 'PC', '7/10'));
  games.push(new Game(images[17], 'Devil Survivor Overclocked','Shin Megami Tensei', 'Nintendo 3DS', 9));
  games.push(new Game(images[18], 'Pikmin 3','Pikmin', 'Wii U', 9));
  games.push(new Game(images[19], 'Chrono Trigger','Chrono', 'Wii Virtual Console', 10));
  games.push(new Game(images[20], 'Aria of Sorrow','Castlevania', 'Game Boy Advance', 10));
  games.push(new Game(images[21], 'Donkey Kong Country 2: Diddy\'s Kong Quest','Donkey Kong Country', 'Wii Virtual Console', 10));
  games.push(new Game(images[22], 'Phoenix Wright: Trials and Tribulations','Ace Attorney', 'Nintendo DS', 10));
  games.push(new Game(images[23], 'The Messenger', '', 'Nintendo Switch', 10));
  games.push(new Game(images[24], 'Persona 3 FES', 'Persona', 'Playstation 3', 9));
  games.push(new Game(images[25], 'Black and White', 'Pokémon', 'Nintendo DS', 9));
  games.push(new Game(images[26], 'Twilight Princess', 'Legend of Zelda, The', 'Wii', '10/10'));
  games.push(new Game(images[27], 'Danganronpa 2: Goodbye Despair', 'Danganronpa', 'PC', 7));
  games.push(new Game(images[28], 'Final Fantasy I & II: Dawn of Souls', 'Final Fantasy', 'Game Boy Advance', 7));
  games.push(new Game(images[29], 'Paper Mario', 'Paper Mario', 'Wii Virtual Console', 9));
  games.push(new Game(images[30], 'Super Smash Bros. Brawl', 'Super Smash Bros.', 'Wii', 9));
  games.push(new Game(images[31], 'Xenoblade Chronicles X', 'Xenoblade Chronicles', 'Wii U', 9));
  games.push(new Game(images[32], 'Echoes: Shadows of Valentia', 'Fire Emblem', 'Nintendo 3DS', 9));
  games.push(new Game(images[33], 'Okamiden', 'Okami', 'Nintendo DS', 8));
  games.push(new Game(images[34], 'The Lost Age', 'Golden Sun', 'Game Boy Advance', 10));
  games.push(new Game(images[35], 'Sword and Shield', 'Pokémon', 'Nintendo Switch', 7));
  games.push(new Game(images[36], 'Ocarina of Time', 'Legend of Zelda, The', 'Wii Virtual Console', 10));
  games.push(new Game(images[37], 'Apollo Justice', 'Ace Attorney', 'Wii Virtual Console', 7));
  games.push(new Game(images[38], 'Super Mario Sunshine', 'Super Mario', 'GameCube', 7));
  games.push(new Game(images[39], 'Pikmin', 'Pikmin', 'Wii', 8));
  games.push(new Game(images[40], 'Final Fantasy V', 'Final Fantasy', 'Game Boy Advance', 7));
  games.push(new Game(images[41], 'EarthBound', 'EarthBound', 'SNES', 8));
  games.push(new Game(images[42], 'Xenoblade Chronicles 2', 'Xenoblade Chronicles', 'Nintendo Switch', 8));
  games.push(new Game(images[43], 'Danganronpa V3: Killing Harmony', 'Danganronpa', 'PC', 8));
  games.push(new Game(images[44], 'Metroid Fusion', 'Metroid', 'Game Boy Advance', 9));
  games.push(new Game(images[45], 'FireRed and LeafGreen', 'Pokémon', 'Game Boy Advance', 8));
  games.push(new Game(images[46], 'Super Smash Bros. Ultimate', 'Super Smash Bros.', 'Nintendo Switch', 9));
  games.push(new Game(images[47], 'New Horizons', 'Animal Crossing', 'Nintendo Switch', 8));
  games.push(new Game(images[48], 'Dark Dawn', 'Golden Sun', 'Nintendo DS', 9));
  games.push(new Game(images[49], 'Portal', 'Portal', 'PC', 9));
  games.push(new Game(images[50], 'The Thousand Year Door', 'Paper Mario', 'GameCube', 10));
  games.push(new Game(images[51], 'Minish Cap', 'Legend of Zelda, The', 'Game Boy Advance', 10));
  games.push(new Game(images[52], 'Phoenix Wright: Ace Attorney', 'Ace Attorney', 'Nintendo DS', 9));
  games.push(new Game(images[53], 'Donkey Kong Country', 'Donkey Kong Country', 'Wii Virtual Console', 9));
  games.push(new Game(images[54], 'Awakening', 'Fire Emblem', 'Nintendo 3DS', 7));
  games.push(new Game(images[55], 'Zero Mission', 'Metroid', 'Game Boy Advance', 8));
  games.push(new Game(images[56], 'X and Y', 'Pokémon', 'Nintendo 3DS', 7));
  games.push(new Game(images[57], 'Sonic Colors', 'Sonic', 'Nintendo DS', 8));
  games.push(new Game(images[58], 'Super Smash Bros. for Wii U', 'Super Smash Bros.', 'Wii U', 8));
  games.push(new Game(images[59], 'Wild World', 'Animal Crossing', 'Nintendo DS', 7));
  games.push(new Game(images[60], 'Xenoblade Chronicles 2: Torna The Golden Country', 'Xenoblade Chronicles', 'Nintendo Switch', 10));
  games.push(new Game(images[61], 'EarthBound Beginnings', 'EarthBound', 'Wii U', 7));
  games.push(new Game(images[62], 'Portal 2', 'Portal', 'PC', 10));
  games.push(new Game(images[63], 'Super Mario Galaxy', 'Super Mario', 'Wii', 8));
  games.push(new Game(images[64], 'Pikmin 2', 'Pikmin', 'Wii', 7));

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
  // 5 Favourite Games
  for (let i = 0; i < 5; i++) {
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
        var g = document.getElementById(games[colNum * j + k].title);
        g.style.transform = "scale(1.05)";
        g.style.opacity = 0.6;
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