$(document).ready(function() {
  let total = 0;

  let grocery = [];

  let $userFood = $("#foodType");
  let $quantity = $("#foodNum");
  let $price = $("#foodPrice");
  let $newList = $("#listItems");
  let $printTotal = $("#finalTotal");

  function calc() {
    return $price.val() * $quantity.val();
  }

  function getTotal() {
    total += Number(calc());
    console.log(total);
    // return total;
  }

  $("button").on("click", function() {
    let $item = $("<li></li>");
    $newList.append($item);
    $item.append(
      $userFood.val() +
        ": $" +
        $price.val() +
        "  (x" +
        $quantity.val() +
        ") || $" +
        calc()
    );
    getTotal();
    $printTotal.text("$" + total.toFixed(2));
  });
  console.log(total);
}); // end .ready() method
