function convertTemperature(){
  var fahrenheintTemp = document.getElementById('fahrenheint').value;
  var calc = ((fahrenheintTemp - 32) / 1.8).toFixed(1);
  var result = document.getElementById('result').value = calc;

  if(fahrenheintTemp == ''){
  	document.getElementById('result').value = '';
  }
}


function resetTemperature(){
  document.getElementById('fahrenheint').value = '';
  document.getElementById('result').value = '';
}


