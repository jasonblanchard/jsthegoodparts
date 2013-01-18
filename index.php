<HTML>

<head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
  <link href="styles.css" rel="stylesheet" type="text/css">
  <script src="ajax.js"></script>
</head>
<body>
<h1>JavaScript Testing</h1>

<?php
  if (isset($_POST['title']) && isset($_POST['body'])) { ?>
    <script>
      var title = "<?php echo $_POST["title"]; ?>";
      var body = "<?php echo $_POST["body"]; ?>";

      submitNode(title, body);

    </script>

      <?php 
  }
?>


<form id="node-submit" action="#" method="post">
  Title: <input type="text" name="title"></input>
  <br />
  Body: 
  <br />
  <textarea name="body" COLS=40 ROWS=6></textarea>
  <br />
  <input type="submit" value="Submit Node">
</form>

  <!-- <script src="objects.js"></script> -->
  <script src="jquerytest.js"></script>

  <div class="left-sidebar">
    <h3>This is a sidebar</h3>
    <ul>
      <li>asdfasdf</li>
      <li>ZXcZXc</li>
      <li>sdfkvf</li>
    </ul>
    <div class="button">
      <a class="toggle-button sidebar-open" href=#>close</a>
    </div>
  </div>

  <div>
    <br />
    <script src="regex.js"></script>
  </div>


</body>
