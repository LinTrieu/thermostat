function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.powerSavingMode = true;
  this.maxTemp = 25;
  this.currentUsageStatus = 'medium-usage';
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
    this.maxTemp = 32;
  }
  else {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }};

Thermostat.prototype.reset = function() {
  return this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.showUsage = function() {
  if(this.temp < 18) {
    this.currentUsageStatus = 'low-usage';
  }
  else if(this.temp > 17 && this.temp < 25) {
    this.currentUsageStatus = 'medium-usage';
  }
  else {
    this.currentUsageStatus = 'high-usage';
  }
};

Thermostat.prototype.reset = function() {
  return this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.showUsage = function() {
  if(this.temp < 18) {
      this.currentUsageStatus = 'low-usage';
      return this.currentUsageStatus;
  }
  else if(this.temp > 17 && this.temp < 25) {
      this.currentUsageStatus = 'medium-usage';
    return this.currentUsageStatus;
  }
  else {
    this.currentUsageStatus = 'high-usage';
    return this.currentUsageStatus;
  }
};