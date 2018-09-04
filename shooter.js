var animate =   window.requestAnimationFrame ||  
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) { 
                    window.setTimeout(callback, 1000/60) 
                };

var canvas =    document.createElement('canvas');
var width =     800;
var height =    800;
canvas.width =  width;
canvas.height = height;
var context =   canvas.getContext('2d');

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
};

var render = function() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
};
function ship(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}
function player() {
   this.ship = new ship(50, 50, 20, 10);
}

function enemy() {
  this.ship = new ship(250, 250, 20, 10);
}

ship.prototype.render = function() {
  context.fillStyle = "#FFFFFF";
  context.fillRect(this.x, this.y, this.width, this.height);
};
player.prototype.render = function() {
  this.ship.render();
};

computer.prototype.render = function() {
  this.ship.render();
};
function bullet(x, y) {
  this.x = x;
  this.y = y;
  this.x_speed = 4;
  this.y_speed = 0;
  this.radius = 10;
}
bullet.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = "#FFFFFF";
  context.fill();
};
var player = new player();
var computer = new computer();
var bullet = new bullet(player.x, player.y, 10);

var render = function() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  bullet.render();
};
var update = function() {
  bullet.update();
};

bullet.prototype.update = function() {
  this.x += this.x_speed;
  this.y += this.y_speed;
};
var update = function() {
  bullet.update(player.ship, computer.ship);
};

bullet.prototype.update = function(ship1, ship2) {
  this.x += this.x_speed;
  this.y += this.y_speed;
  var top_x = this.x - 2;
  var top_y = this.y - 2;
  var bottom_x = this.x + 2;
  var bottom_y = this.y + 2;

  if(top_y < (ship2.y + ship2.height) && bottom_y > ship2.y && top_x < (ship2.x + ship2.width) && bottom_x > ship2.x) {
      // hit the enemy ship
      this.y_speed = -3;
      this.x_speed += (ship1.x_speed / 2);
      this.y += this.y_speed;
  }
  
var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});
var update = function() {
  player.update();
  bullet.update(player.ship, computer.ship);
};

player.prototype.update = function() {
  for(var key in keysDown) {
    var value = Number(key);
    if(value == 37) { // left arrow
      this.shipe.move(-10, 0);
    } else if (value == 39) { // right arrow
      this.ship.move(10, 0);
    } else {
      this.ship.move(0, 0);
    }
  }
};

ship.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  this.x_speed = x;
  this.y_speed = y;
  if(this.x < 0) { // all the way to the left
    this.x = 0;
    this.x_speed = 0;
  } else if (this.x + this.width > 400) { // all the way to the right
    this.x = 400 - this.width;
    this.x_speed = 0;
  }
}
var update = function() {
  player.update();
  computer.update(bullet);
  bullet.update(player.ship, computer.ship);
};
omputer.prototype.update = function(bullet) {
  var x_pos = bullet.x;
  var diff = -((this.ship.x + (this.ship.width / 2)) - x_pos);
  if(diff < 0 && diff < -4) { // max speed left
    diff = -5;
  } else if(diff > 0 && diff > 4) { // max speed right
    diff = 5;
  }
  this.ship.move(diff, 0);
  if(this.ship.x < 0) {
    this.ship.x = 0;
  } else if (this.ship.x + this.ship.width > 400) {
    this.ship.x = 400 - this.ship.width;
  }
};