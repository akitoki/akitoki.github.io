$(function(){$(window).on("load",function(e){$(".first").css("height",$(window).innerHeight()),$(".skip").delay(1e3).fadeIn(1e3),$(".first .text01").delay(500).fadeIn(1e3).delay(2500).fadeOut(1e3),$(".first .text02").delay(4e3).fadeIn(1e3),$(".mainWrapper").fadeOut(),setTimeout(function(){$(".first").fadeOut(1e3),$(".mainWrapper").stickyStack({containerElement:".mainWrapper",stackingElement:"section",boxShadow:"0 -3px 20px rgba(0, 0, 0, 0.25)"}),$(".topMv").addClass("show"),$(".mainWrapper").fadeIn(1e3).css("overflow","visible")},8e3),$(".first .skip").on("click",function(){$(".first").fadeOut(),$(".mainWrapper").stickyStack({containerElement:".mainWrapper",stackingElement:"section",boxShadow:"0 -3px 20px rgba(0, 0, 0, 0.25)"}),$(".topMv").addClass("show"),$(".mainWrapper").fadeIn(1e3).css("overflow","visible")})})});