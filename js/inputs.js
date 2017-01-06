$('.input input').keyup(function (e) {
    if($(this).val().length) {
      $(this).closest('.input').addClass('active');
    } else {
      $(this).closest('.input').removeClass('active');
    };
    e.preventDefault();
});

// selects

$('.select').on('click', function(e){
    $(this).next().toggleClass('active');
    e.preventDefault();
});

