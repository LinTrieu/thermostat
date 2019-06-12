function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
};

const DEFAULT_TEMP = 20;

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

Thermostat.prototype.powerSavingModeSwitch = function() {
  if(this.powerSavingMode){
    this.powerSavingMode = false;
    this.maxTemp = 32;
  }
  else {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }

  Thermostat.prototype.reset = function() {
    return this.temp = DEFAULT_TEMP;
  };
};