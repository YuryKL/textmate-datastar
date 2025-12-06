<!DOCTYPE html>
<!-- Test for text.html.php -->
<html>
<body>
  <?php $title = "Datastar Test"; ?>
  <div data-signals="{ count: 0 }"></div>
  <button data-on:click="$count++">Increment</button>
  <span data-text="$count"></span>
</body>
</html>
