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
    $('#temp-display').text(`Thermostat temperature: ${thermostat.temp} degrees`);
  });

  $('#powersaving-switch').on('click', function() {
    thermostat.powerSavingModeSwitch();
    $('#power-saving-status').text(`Power saving status: ${thermostat.showPowerSaving()}`);
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=f6f7691c4b4f18e7bf3e92c2a1334090',function(data) {
    $('#API-temp-display').text(`OpenWeatherMap API temperature: ${data.main.temp} degrees`);
    });

});