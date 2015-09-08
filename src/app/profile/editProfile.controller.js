(function() {
  'use strict';

  angular.module('afDemo')
  .controller('editProfileController', editProfile);

  function editProfile(gravartarUrlBuilder) {
    var vm = this;
    vm.user = {};

    vm.getGravatarUrl = function(email) {
      return  gravartarUrlBuilder.buildGravartarUrl(email);
    };
  }
})();