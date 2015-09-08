(function() {
  'use strict';

  angular
    .module('afDemo')
    .controller('editEventController',editEvt);
  
  function editEvt($window) {
    var vm = this;

    vm.saveEvent = function(event, newEvtForm) {
      
      console.log(newEvtForm);
      if(newEvtForm.$valid) {
        console.log('event ' + event.name + ' saved');
      }
    };

    vm.cancelEdit = function(event) {
      $window.location = "#/main.html";
    };

  } 

})();