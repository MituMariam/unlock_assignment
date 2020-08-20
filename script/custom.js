
   $(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
    });
    });



function addRow(){

  const product_name = prompt("product name", );
  const order_qty = prompt("order quantity",);
  const price = prompt("price",);
  const total = prompt("line total",);
  const cashback = prompt("website cashback",);
  
  if(product_name != null && order_qty != null && price != null && total != null && cashback != null ){
    $(".data-table tbody").append("<tr data-name='"+product_name+"' data-qty='"+order_qty+"' data-qty='"+price+"'data-qty='"+total+"'data-qty='"+cashback+"'><td>  <img src='https://via.placeholder.com/50' alt=''></td><td>"+product_name+"</td><td>"+order_qty+"</td><td>"+price+"</td><td>"+total+"</td><td>"+cashback+"</td><td><i class='fas fa-times-circle delete-data'></i></td></tr>");
  }
  
  }

  //delete from button icon
$("body").on("click", ".delete-data", function(){
  $(this).parents("tr").remove();
});
  
//delete from button
(function(){
  const delete_item = document.querySelector('.delete_item');
  delete_item.addEventListener('click',function(){
    const tr_data = document.querySelectorAll('.delete-data');
    tr_data.forEach(function(item){
item.parentElement.parentElement.remove();
    })

  })

})();
