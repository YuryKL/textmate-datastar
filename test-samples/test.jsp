<%-- Test for text.html.jsp --%>
<!DOCTYPE html>
<html>
<body>
  <h1><%= title %></h1>
  <div data-signals="{ count: 0 }"></div>
  <button data-on:click="$count++">Increment</button>
  <span data-text="$count"></span>
</body>
</html>
