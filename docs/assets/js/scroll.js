const btn = $('#scroll-button');

$(window).scroll(() => {
  if ($(this).scrollTop() > 500) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});

btn.click ((e) => {
  e.preventDefault(); // 重要
  $('body, html').animate({ scrollTop: 0 }, 500);
});
