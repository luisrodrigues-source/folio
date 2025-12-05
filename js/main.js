// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  
  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();




function CS_Addlocalvideo(pathvideo) {
		//background music off
		$('#AudioPlayer').trigger("pause");
		$('#view_sound').attr('src',"img/audio/mute2.png");
		html='<div id="lg-outer" class="video_1" ><div id="lg-gallery" class="show-after-load opacity" ><div id="lg-slider" class="fade-m"><div  class="lg-slide current loaded complete">	<div class="video-cont" style="max-width:855px !important;" >				<div class="object">					<video class="localVideoplayer" width="600" height="500" autoplay="" controls=""><source src="'+ pathvideo +'" type="video/mp4"></video>				</div>				</div>				</div>				</div>			<a id="lg-close" class="close" onclick="removeVideo()">	</a></div>			</div>'	
		$('body').append(html);
		$('body').addClass( "light-gallery" );
		$('#lg-outer').on('click', function (event) {
                            if ($(event.target).is('.lg-slide')) {
                              removeVideo();
                            }
		});	
return;			
}

function removeVideo() {
$("body").removeClass( "light-gallery" );
$('#lg-outer').remove();
}


$(document).ready(function() {
	html="";
	total=214;
	per_page=26;
	pagina=1;
	conta=0;
	for (i=0;i<total;i++) {
		html+="<li class=\"page page_"+pagina+"\"  data-src='ims_images/imgs/"+ i +".jpg'> <a href='#'>  <img src='ims_images/thumbs/"+ i +".jpg' /> </a> </li>"; 
		if (conta==per_page) {
			pagina=pagina + 1;
			conta=0; 
		}else{
			conta=conta+1; 
		}
	}
	
	$("#lightGallery").append(html);
	$('#lightGallery').lightGallery({ 
		showThumbByDefault:true,
		addClass:'showThumbByDefault',
		thumbWidth           : 100,    // Width of each thumbnails
		thumbMargin          : 1 ,
		controls         : true, 
		// lang         : { allPhotos: 'Fotos evento IMS' }
		});

	$(".page").hide();	
	$(".page_1").show();	


	$('#lightGalleryVideos').lightGallery({
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        },
		showThumbByDefault:true,
		addClass:'showThumbByDefault',
		thumbWidth           : 100,    // Width of each thumbnails
		thumbMargin          : 1 ,
		animateThumb         : true, 
		controls     : true,
		lang         : { allPhotos: 'Videos Evento IMS' }
	});
	

	$('#ap_pa').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } );
	$('#ap_pf').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	
	);
	$('#ap_pfa').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	
	);
	$('#ap_fr').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ap_ls').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ap_pb').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ap_pr').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ap_lg').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ap_vl').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);

	$('#ip_entrevista').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#ip_promo').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);

	$('#te_um').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);	
	$('#te_dois').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	$('#te_tres').lightGallery(
	{
		onOpen: function() {
			$('#AudioPlayer').trigger("pause");
			$('#view_sound').attr('src',"img/audio/mute2.png");
        } } 
	);
	
	//VIDEOS 
	$('#video_melhoresmomentos').lightGallery({		onOpen: function() {			$('#AudioPlayer').trigger("pause");	$('#view_sound').attr('src',"img/audio/mute2.png");       }, thumbnail:false,addClass:'localVideo'		} 	);			
    
    $('#localVideoplayer').trigger('pause');
    
	$('#ip_helix').lightGallery({onOpen: function() {	$('#AudioPlayer').trigger("pause");	$('#view_sound').attr('src',"img/audio/mute2.png");    } } 	);
    
    $('#ip_helix_paris').lightGallery({onOpen: function() {	$('#AudioPlayer').trigger("pause");	$('#view_sound').attr('src',"img/audio/mute2.png");    } } 	);
    
    
    $('#ip_hack1').lightGallery({onOpen: function() {	
    $('#AudioPlayer').trigger("pause");	
    $('#view_sound').attr('src',"img/audio/mute2.png");    } } 	);
    
	$('#ip_mundo').lightGallery(	{		onOpen: function() {			
    $('#AudioPlayer').trigger("pause");	
    $('#view_sound').attr('src',"img/audio/mute2.png");        } } 	);	
	
 });

	$(window)
            .scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.scrolltop:hidden').stop(true, true).fadeIn();
                } else {
                    $('.scrolltop').stop(true, true).fadeOut();
                }
            });

