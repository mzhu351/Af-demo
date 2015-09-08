(function() {
  'use strict';

  angular
    .module('afDemo')
    .controller('MainController', main);

  /** @ngInject */
  function main(eventData) {
    var vm = this;
    vm.sortorder = '-upVoteCount';
    vm.event = eventData.event;
    

    vm.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    vm.downVoteSession = function(session) {
        session.upVoteCount--;
    };
  }
})();
