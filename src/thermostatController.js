$(document).ready(function(){

  var thermostat = new Thermostat();

  $('#temp-display').text(`Temperature: ${thermostat.temp} degrees`);
  $('#power-saving-status').text(`Power saving status: ${thermostat.showPowerSaving()}`);

  $('#temperature-up').on('click', function(){
    thermostat.up();
    $('#temp-display').text(`Temperature: ${thermostat.temp} degrees`);
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    $('#temp-display').text(`Temperature: ${thermostat.temp} degrees`);
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    $('#temp-display').text(`Temperature: ${thermostat.temp} degrees`);
  });

  $('#powersaving-switch').on('click', function() {
    thermostat.powerSavingModeSwitch();
    $('#power-saving-status').text(`Power saving status: ${thermostat.showPowerSaving()}`);
  });




});