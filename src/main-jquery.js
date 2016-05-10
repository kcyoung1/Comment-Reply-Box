$(()=>{

  $('.jquery button.btn-primary').prop('disabled', true);

  $('.jquery textarea').on('input', function (){

      if($('.js-add-photo-button').hasClass('photo-added')){
        $('.jquery span').text(140 - 27 - $(this).val().length);
      } else {
        $('.jquery span').text(140 - $(this).val().length);
      }

      if($(this).val().length > 0){
        $('.jquery button.btn-primary').prop('disabled', false);
      } else {
        $('.jquery button.btn-primary').prop('disabled', true);
      }

  });


$('.js-add-photo-button').on('click', function(){
  if($(this).hasClass('photo-added')){
    $(this)
      .removeClass('photo-added')
      .text('Add Photo');
      $('.jquery span').text(140 - $('.jquery textarea').val().length);

      if($('.jquery textarea').val().length === 0) {
        $('.jquery button.btn-primary').prop('disabled', false);
      }
  } else {
    $(this)
      .addClass('photo-added')
      .text('Photo added');
      $('.jquery span').text(140 - 27 - $('.jquery textarea').val().length);
      $('.jquery button.btn-primary').prop('disabled', true);
  }

  // if($(this).hasClass('photo-added')){
  //   $('.jquery button.btn-primary').prop('disabled', false);
  // } else {
  //   $('.jquery button.btn-primary').prop('disabled', true);
  // }

  });
});
