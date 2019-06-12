describe('Thermostat', function() {

  var thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a temperature', function(){
    expect(thermostat.temp).toBe(20)
  });

  it('can increase temp', function(){
    expect(thermostat.up()).toBe(21);
  });

  it('can decrease temp', function(){
    expect(thermostat.down()).toBe(19);
  });

});