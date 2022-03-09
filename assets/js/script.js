$(function() {
  const url = location.pathname
  $('header a[href^="/#"]').on('click', function(e) {
    e.preventDefault()
    const link = $(this).attr('href')
    const hash = '/' + location.hash
    const innerLink = function() {
      $('.content-inner').fadeOut();
      setTimeout(function() {
        window.location = link
        $('.content-inner').fadeIn();
      }, 500)
    }
    if (url.match('/blog/')) {
      $('body').fadeOut()
      setTimeout(function() {
        window.location = link
      }, 300)
    } else {
      if (hash !== '/') {
        if (link !== hash) {
          innerLink()
        }
      } else if (link !== '/#top') {
        innerLink()
      }
      return false
    }
  })
  $('header a[href^="/blog"]').on('click', function(e) {
    e.preventDefault()
    const link = $(this).attr('href')
    $('.top-contents').fadeOut(300)
    setTimeout(function() {
      window.location = link
    }, 500)
    return false
  })
  $('.blog-wrap a').on('click', function(e) {
    e.preventDefault()
    const link = $(this).attr('href')
    $('body').fadeOut(300)
    setTimeout(function() {
      window.location = link
    }, 300)
  })
  if (window.performance.navigation.type === 1 && !url.match('/blog/')) {
    const hash = '/' + location.hash
    window.location = hash
  }
  $('.discography-list .modal').on('click', function() {
    $('.discography-modal').fadeIn(500)
    const target = '#' + $(this).data('target')
    $(target).show()
  })
  $('.discography-modal #modal-close-btn, .discography-modal').on('click', function() {
    $('.discography-modal').fadeOut(500)
    $('.discography-modal .detail').fadeOut(500)
  })
  $('.discography-modal .modal-inner').on('click', function(e) {
    e.stopPropagation();
  })
  const pagetop = $('#page-top');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on('click', function () {
     $('body, html').animate({ scrollTop: 0 }, 500, 'swing');
     return false;
  })
  if ($(window).width() < 736) {
    const spMenuBtn = $('header .sp-icon')
    spMenuBtn.on('click', function() {
      $(this).toggleClass('open').next('nav').slideToggle()
    })
    const spNavLink = $('header .nav__item a')
    spNavLink.on('click', function() {
      console.log('click')
      $(this).parents('nav').slideToggle()
      spMenuBtn.toggleClass('open')
    })
  }
})
$(window).on('load', function(){
  $('body').removeClass('fadeout');
});
$(window).on('resize', function() {
  const hash = '/' + location.hash
  if (hash.match('/#')) {
    const target = $(location.hash)
    const index = target.index()
    const position = $(window).outerHeight() * index
    $('.top-contents').animate({scrollTop: position}, 0, 'swing')
  }
})
