var cart = 0;

function addItem(id, name,description,price,moreInfo) {
     let html ='';
          html += '<div class="item"' data-id="> + id + '">';
          html += '<div class="name"> + name + </div>';
           html += '<img src="assets/fui.jpg"></img>';
           html += '<div class="description">' + description + '</div>';
           html += '<div class="price">' + price + '</div>';
           html += '<button class="item-add>Add to cart</button>';
       html += '<button class="item-remove>Remove</button>';
           html += '<br/>';
           html += '<a class="more-info-link"href="#">More info</a>';
           html += '<div class="more info">' + moreInfo + '</div>';
          html += '</div>';
       
       $('#container').prepend(html);
}

$(document).ready(function(){ 
    $('container').on('click','more-info-link',function(event){
        event.preventDefault();
        
        $(this).parent().find('.more-info').slideToggle('slow');
        $(this)
        .animate({"opacity": 0.5, "margin-left":10},'fast')
        .animate({"opacity": 1, "margin-left":0},'fast');
    });
    
    $('#container').on('click','.item-remove',function(){
       $(this).parent().remove(); 
    });
    
    $.ajax('dada/item.json', {
        dataType: 'json',
        contentType: 'application/json',
        cache: false
    })
    .done(function(response){
        let items = response.items;
        items.forEach(function(items){
        addItem(item.id,item.name, item.description, item.price, item.moreInfo);
        });
    })
    .fail(function(request, errorType, errorMessage){
        console.log(erroMessage);
    })
    .always(function(){
        
    });
    
    $('#container').on('click','.item-add',function(){
        let id =$(this).parent().data('id');
        
       $.ajax('data/addToCart.json', {
           type: 'post',
           data: { id: id },
           dadaType: 'json',
           contentType: 'application/json'
       }) 
        .done(function(response){
           if (response.message === 'success') {
           let price = response.price;
           
           cart += price;
           
           $('#cart-container').text('$' + cart);
       }
              });
});

    $('#newsletter-checkbox').on('change',function(){
        if($(this).is(':checked')){
            $('#newsletter-frequency').show();
        } else{
            $('#newsletter-frequency').hide();
        }
    });
  $('#newsletter-checkbox').trigger('change');  
    
    $('#cart-form').on('submit',function(event){
        event.preventDefault();
     
        let data = {form: $(this).serialize(), price: cart };
        
        $.ajax($(this).attr('action'), {
            type: 'post',
            data: data
        })
        .done(function(response){
            $('#feedback-message').text(response.message);
            alert(data.form +': ' + response.message);
        });
    });
});