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
           html += '<button>Add to cart</button>';
           html += '<br/>';
           html += '<a href="#">More info</a>';
           html += '<div class="more info">kjhck fjhlvn fhvphnw evihpihvn vipjnve lvipinv svpivjnpvj vjpjev 
           '</div>';
          html += '</div>';
       
       $('#container').append(html);
   });
});
