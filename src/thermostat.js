function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.up = function() {
  return this.temp += 1;
};

Thermostat.prototype.down = function() {
  return this.temp -= 1;
};