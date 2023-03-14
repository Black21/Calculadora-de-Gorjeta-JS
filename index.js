formatMoney = (value) => {
   value = Math.ceil(value * 100)/ 100;
  value = value.toFixed(2);
  return "R$ " + value;
};

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
      var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

formatSplit = (value) =>{
    if(value > 1) return value + ' Pessoas';
    return value + ' Pessoa';
}

function update() {
  let bill = Number(document.getElementById("yourBill").value);
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  let tipValue = bill * (tipPercent / 100);
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;

  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal);
  document.getElementById("splitValue").innerHTML = formatSplit(split);

  document.getElementById("billEach").innerHTML = formatMoney(billEach);
}
