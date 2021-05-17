$(document).ready(function () {
  const listof = {};
  $('INPUT').change(function () {
    if ($(this).prop('checked')) {
      listof[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete listof[$(this).attr('data-id')];
    }
    $('DIV.amenities h4').text(Object.values(listof).join(', '));
  });
});
