$(document).ready(function(){

  var thermostat = new Thermostat();

  $('#temp-display').text(`Temperature: ${thermostat.temp} degrees`);

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






});