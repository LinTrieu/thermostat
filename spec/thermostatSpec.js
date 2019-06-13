describe('Thermostat', function() {

  var thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a temperature', function(){
    expect(thermostat.temp).toBe(20);
  });

  it('can increase temp', function(){
    expect(thermostat.up()).toBe(21);
  });

  it('can decrease temp', function(){
    expect(thermostat.down()).toBe(19);
  });

  it('has a minimum temp', function(){
    expect(thermostat.giveMinTemp()).toBe(10);  
  });

  it('cannot be lower than the minimum temp', function(){
    [1,2,3,4,5,6,7,8,9,10].forEach(function(i){
      thermostat.down();
    });
    expect(function(){thermostat.down()}).toThrow(new Error("you will freeze if you do that!")); 
  });

  it('by default power saving mode is on', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('power saving mode can be switched off', function(){
    thermostat.powerSavingModeSwitch();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('power saving mode can be switched on', function(){
    thermostat.powerSavingModeSwitch();
    thermostat.powerSavingModeSwitch();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('by default has a max temp of 25 degrees if power saving mode is on', function() {
    expect(thermostat.maxTemp).toBe(25);
    });

  it('max temp can be changed to 32 degrees if power saving mode is turned off', function() {
    thermostat.powerSavingModeSwitch();
    expect(thermostat.maxTemp).toBe(32);
    });

  it('max temp can be changed to 25 degrees if power saving mode is turned on', function() {
    thermostat.powerSavingModeSwitch();
    thermostat.powerSavingModeSwitch();
    expect(thermostat.maxTemp).toBe(25);
    });
  
  it('can reset the temp to 20 degrees', function() {
    thermostat = new Thermostat();
    console.log(thermostat);
    thermostat.reset();
    expect(thermostat.temp).toBe(20);
  });

  it('can show low-usage status', function(){
    thermostat = new Thermostat();
    for(var i = 0; i < 3; i++){
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toEqual('low-usage')
  });

  it('can show medium-usage status', function(){
    expect(thermostat.energyUsage()).toEqual('medium-usage')
  });

  it('can show high-usage status', function(){
    for(var i = 0; i < 6; i++){
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual('high-usage')
  });

});