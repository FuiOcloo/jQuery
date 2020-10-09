$(document).ready(function(){
  ('#select-menu').on('change',function(){
    let name = $('#select-menu option:selcted').text(); 
      let distance = $('#select-menu option:selcted').val();
      let price = $('#select-menu option:selcted').data('price');
     
      if(distance){
      $('#feedback-message').text('You are signing up for a ' + name + 'which costs' + price + ', to a distance of ' + distance + 'km');
      } else {
         $('#feedback-message').empty(); 
      }
  });
});
