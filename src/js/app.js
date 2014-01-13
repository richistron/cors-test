/*global define */
define(function (require) {
  'use strict';

  var App = (function() {

    // constructor
    function App() {

      // context ref
      var _this = this;

      // new backbone router
      this.Router = new (this.Backbone.Router.extend({

        routes: {
          '': 'home',
          '*notFound': 'notFound'
        },

        home: function() {
          var tpl = require('hbs!../templates/allo');
          _this.$('.progress-bar').width('100%');
          setTimeout(function(){
            _this.$('#main-container').html(tpl());
            _this.ajaxCall();
          },1000);
        },

        notFound: function() {
          _this.Router.navigate('#/');
        }

      }))();

      // hitory backbone start
      this.Backbone.history.start();
    }

    // My Awesome App VERSION
    App.prototype.VERSION = '0.0.0';

    // Backbone
    App.prototype.Backbone = require('chiropractor');

    // underscore
    App.prototype._ = require('underscore');

    // jQuery
    App.prototype.$ = require('jquery');

    App.prototype.ajaxCall = function(){
      require('jquery');
      require('jquery.cors/jquery.cors');
      $.ajax({
        url: 'https://nimoy-wisertogether.rhcloud.com/api/v1/conditions/high-blood-pressure/?demographics:gender=gender-female&demographics:gender=gender-female&demographics:pregnant=yesno-yes',
        complete: function(XHR){
          console.log(XHR)
          console.log('nice')
        },
        error: function(){
          console.log('error!!')
        }
      })
    }

    // return App
    return App;

  })();

  return (new App());
});