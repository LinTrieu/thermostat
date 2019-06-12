function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
};


Thermostat.prototype.up = function() {
  return this.temp += 1;
};

Thermostat.prototype.down = function() {
  return this.temp -= 1;
};

Thermostat.prototype.giveMinTemp = function() {
  return this.MIN_TEMP;
};