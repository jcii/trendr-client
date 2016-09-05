import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: [
    './css/home-page.component.css', 
    './css/animate.css',
    './css/ionic_icons.css',
    './css/bootstrap4.css'
    ]
  })
  
export class HomePageComponent implements OnInit {

  constructor() { }
  ngOnInit() { 
//     (function($) {
//     "use strict";

//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 60
//     });

//     new WOW().init();
    
//     $('a.page-scroll').bind('click', function(event) {
//         var $ele = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($ele.attr('href')).offset().top - 60)
//         }, 1450, 'easeInOutExpo');
//         event.preventDefault();
//     });
    
//     $('#collapsingNavbar li a').click(function() {
//         /* always close responsive nav after click */
//         $('.navbar-toggler:visible').click();
//     });

//     $('#galleryModal').on('show.bs.modal', function (e) {
//        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
//     });

// })(jQuery);
  }
}
