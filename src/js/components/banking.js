jQuery(document).ready(function($) {
  $('.extra__body').sameHeight()
  
  $.fn.sameHeight = function () {
    var max = 0
    this.each(function () {
      max = Math.max($(this).height(), max)
    })
    return this.height(max)
  }
})