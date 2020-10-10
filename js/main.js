$(document).ready(function(){
   $('#button-create-item').on('click',function(){
      let name = $('#input-create-item').val();
       $('#input-create-item').val('');
       
       let html ='';
        html += '<div class="item">';
          html += '<div class="name"> + name + </div>';
           html += '<img src="assets/fui.jpg"></img>';
           html += '<div class="description">loremnjnbdvb,hjb kjbvbevj jnevjnej ijveoi evijjevn</div>';
           html += '<div class="price">499</div>';
           html += '<button class="item-add>Add to cart</button>';
       html += '<button class="item-remove>Remove</button>';
           html += '<br/>';
           html += '<a class="more-info-link"href="#">More info</a>';
           html += '<div class="more info">kjhck fjhlvn fhvphnw evihpihvn vipjnve lvipinv svpivjnpvj vjpjev</div>';
          html += '</div>';
       
       $('#container').prepend(html);
   });
    
    $('container').on('click','more-info-link',function(event){
        event.preventDefault();
        
        $(this).parent().find('.more-info').slideToggle('slow');
    });
    $('#container').on('click','.item-remove',function(){
       $(this).parent().remove(); 
    });
});
