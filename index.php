<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebSQL 19101</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="container">
  <div class="wrapper">
    <h1>Web SQL</h1>
    <form>
      <div class="block">
        <label for="color">Color: </label>
        <input type="color" id="color" required>
      </div>
      <div class="block">
        <label for="number">Number: </label>
        <input type="number" min="0" max="130" id="number" required>
      </div>
      <button onclick="saveForm()" id="save">Save</button>
    </form>
    <div class="result">
      <h2>Result</h2>
    </div>
    <table border="1">
      <thead>
      <tr>
        <th>Number</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody id="result"></tbody>
    </table>
  </div>
</div>
<script src="script.js"></script>
</body>
</html>