$(document).ready(function(){
  $('.col-2-btn').click(function(){
    $('.col-2-btn').removeClass('active');
    $(this).addClass('active');

    $(".search-box").val('');

    const attr = $(this).attr('data-li');

    $('.command').hide();
    $(`.${attr}`).show();
  });

    $('.checkbox-expand').click(function(){
    if ($('.checkbox-expand').is(':checked')){
      $('.command-details').slideDown(300);
      $('.clock-icon').show();
    } else {
      $('.command-details').slideUp(300);
      $('.clock-icon').hide();
    }
  })

  // Use event delegation for appended contents
  $(document).on('click',  '.command', function(){
    const attr = $(this).attr('name');
    $(`.clock-for-${attr}`).toggle(300);
    $(`.${attr}-1`).slideToggle(300);
  });

  $(".search-box").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    if (!value){
      const attr = $('.col-2-btn.active').attr('data-li');
      $('.command').hide();
      $(`.${attr}`).show();
      return;
    };

    $(".commands div").filter(function(_,el) {
      if (!$(el).hasClass('command')){
         return;
      };

      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
