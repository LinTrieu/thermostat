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

  // it('by default power saving mode is on', function(){
  //   expect(thermostat.powerSavingMode).toBe(true);
  // });
});