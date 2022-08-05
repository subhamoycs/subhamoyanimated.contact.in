/*global jQuery */
jQuery(function ($) {
    'use strict';
  
    var App = {
      $options: {},
      $loader: $(".loader"),
      $animationload: $(".animationload"),
  
      bindEvents: function() {
        //binding events
        $(window).on('load', this.load.bind(this));
      },
      load: function() {
        /* ==============================================
        1.Page Preloader
        =============================================== */
        this.$loader.delay(200).fadeOut();
        this.$animationload.delay(500).fadeOut("slow");
      },
     
      init: function (_options) {
        $.extend(this.$options, _options);
        this.bindEvents();
      }
    }
    App.init({});
  });