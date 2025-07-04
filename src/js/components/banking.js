jQuery(document).ready(function($) {
  $('.extra__body').sameHeight()

  $('a[crm-form-link]').on('click', function(e) {
    e.preventDefault()
    
    const _this = this
    const modal = document.querySelector(_this.hash);
    modal.innerHTML = ''
    
    $.fancybox.open({
      type: 'inline',
      src: _this.hash,
      beforeShow: function(instance) {
        window.addEventListener('b24:form:show', (event) => {
          console.log('CRM event: ' + _this.dataset.key)
          let form = event.detail.object
          if (form.identification.id == 109) {
              form.setProperty('key', _this.dataset.key)
              setTimeout(() => {
                  const inputs = modal.querySelectorAll('input[type="string"]')
                  for(let i of inputs) {
                      if (i.value == '%key% ') {
                          i.value = _this.dataset.key
                      }
                  }
              }, 100);
          }
        })
  
        var script = document.createElement('script');
        script.async = true;
        script.dataset.b24Form = 'inline/109/1lge1u';
        script.dataset.skipMoving = 'true';
        script.src = 'https://portal.usabilitylab.ru/upload/crm/form/loader_109_1lge1u.js?' + (Date.now() / 180000 | 0);
  
        modal.appendChild(script);
      }
    });

  })

})

jQuery.fn.sameHeight = function () {
  var max = 0
  this.each(function () {
    max = Math.max(jQuery(this).height(), max)
  })
  return this.height(max)
}

document.addEventListener("DOMContentLoaded", function() {
  var spoilers = document.querySelectorAll(".spoiler-button");
  spoilers.forEach(function(button) {
      button.addEventListener("click", function() {
          var content = this.parentNode.nextElementSibling;
          if (content.style.height === "0px") {
              content.style.height = `${content.scrollHeight}px`;
          } else {
              content.style.height = "0px";
          }
      });
  });
});