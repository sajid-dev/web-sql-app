//local database creation
var db = openDatabase('color_number', '1.0', 'Color Data', 2 * 1024 * 1024);
var msg;

//Table creation
db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS color_data (color,number)');
});


//function to save data to database
function saveForm() {
  var colr = document.getElementById("color").value;
  var num = document.getElementById("number").value;
  db.transaction(function (tx) {
    tx.executeSql('INSERT INTO color_data (color, number) VALUES (' + num + ',"' + colr + '")');
  });
  msg = '<p>Log message created and row inserted.</p>';
  document.querySelector('#status').innerHTML = msg;
}

//Read data from database
db.transaction(function (tx) {
  tx.executeSql('SELECT * FROM color_data', [], function (tx, results) {
    var len = results.rows.length, i;

    console.log(len);
    var res = '';
    for (i = 0; i < len; i++) {
      res += "<tr>";
      res += "<td>" + results.rows.item(i).color + "</td>";
      res += "<td>" + results.rows.item(i).number + "</td>";
      res += "</tr>";
      document.getElementById("result").innerHTML += res;
      res = '';
    }
  }, null);
});