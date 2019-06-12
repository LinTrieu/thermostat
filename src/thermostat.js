function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
};


Thermostat.prototype.up = function() {
  return this.temp += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinTemp()) {
    throw new Error('you will freeze if you do that!');
  }
  return this.temp -= 1;
};

Thermostat.prototype.giveMinTemp = function() {
  return this.MIN_TEMP;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP
};