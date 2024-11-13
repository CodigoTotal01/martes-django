document.addEventListener('DOMContentLoaded', function () {

  $('.collapse').collapse('hide');
  $('.collapse').first().collapse('show');
  $('.card-header').on('click', function () {
    const collapseElement = $(this).next('.collapse');
    collapseElement.collapse('toggle');
  });
});
