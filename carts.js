$(document).ready(function() {
    $(".qt-minus").click(function() {
      var $product = $(this).closest(".product");
      var $quantity = $product.find(".qt");
      var $price = $product.find(".price").text().replace("RM", "");
      var $fullPrice = $product.find(".full-price");
      var $subtotal = $(".subtotal span");
      var $tax = $(".tax span");
      var $total = $(".total span");
  
      var newQuantity = parseInt($quantity.text()) - 1;
      if (newQuantity >= 1) {
        $quantity.text(newQuantity);
        $fullPrice.text("RM" + (newQuantity * parseFloat($price)).toFixed(2));
        calculateTotal();
      }
    });
  
    $(".qt-plus").click(function() {
      var $product = $(this).closest(".product");
      var $quantity = $product.find(".qt");
      var $price = $product.find(".price").text().replace("RM", "");
      var $fullPrice = $product.find(".full-price");
      var $subtotal = $(".subtotal span");
      var $tax = $(".tax span");
      var $total = $(".total span");
  
      var newQuantity = parseInt($quantity.text()) + 1;
      $quantity.text(newQuantity);
      $fullPrice.text("RM" + (newQuantity * parseFloat($price)).toFixed(2));
      calculateTotal();
    });
  
    function calculateTotal() {
      var subtotal = 0;
  
      $(".full-price").each(function(index) {
        subtotal += parseFloat($(this).text().replace("RM", ""));
      });
  
      var tax = subtotal * 0.05;
      var total = subtotal + tax;
  
      $(".subtotal span").text("RM" + subtotal.toFixed(2));
      $(".tax span").text("RM" + tax.toFixed(2));
      $(".total span").text("RM" + total.toFixed(2));
    }
  
    $(".remove").click(function() {
      var el = $(this);
      el.parent().parent().addClass("removed");
      window.setTimeout(function() {
        el.parent().parent().slideUp("fast", function() {
          el.parent().parent().remove();
          if ($(".product").length === 0) {
            $("#cart").html("<h1>No Items in cart</p>");
          }
          calculateTotal();
        });
      }, 200);
    });
  });

  let subMenu = document.getElementById("subMenu");

function toggleMenu(){
  subMenu.classList.toggle("open-menu");
}