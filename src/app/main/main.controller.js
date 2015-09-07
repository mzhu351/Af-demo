(function() {
  'use strict';

  angular
    .module('afDemo')
    .controller('MainController', main);

  /** @ngInject */
  function main() {
    var vm = this;

    vm.mystyle = {color:'red'};
    vm.myclass = "blue";
    vm.buttonDisabled = true;

    vm.sortorder = '-upVoteCount';

    vm.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2013',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: 'assets/images/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives',
          upVoteCount: 3
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'This session will take a closer look at scope. Learn what they do.',
          upVoteCount: 2
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: '2 Headquarters',
          level: 'Intermediate',
          abstract: 'In this session you will learn how to craft controllers that will rock your world',
          upVoteCount: 35
        }
      ]
    };

    vm.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    vm.downVoteSession = function(session) {
        session.upVoteCount--;
    };
  }
})();
