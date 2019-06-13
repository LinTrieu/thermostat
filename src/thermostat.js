function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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

Thermostat.prototype.powerSavingModeSwitch = function() {
  if(this.powerSavingMode){
    this.powerSavingMode = false;
    this.maxTemp = this.MAX_LIMIT_PSM_OFF;
  }
  else {
    this.powerSavingMode = true;
    this.maxTemp = this.MAX_LIMIT_PSM_ON;
  }};

Thermostat.prototype.reset = function() {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  else if(this.temp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temp <= this.MAX_LIMIT_PSM_ON ) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
};