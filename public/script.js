$(function () {
  skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
      //hack - forces mobile version to be off
      return false;
    }
  });
});