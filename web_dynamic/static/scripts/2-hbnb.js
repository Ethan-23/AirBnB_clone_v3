#!/usr/bin/node
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
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
      console.log('class added')
    } else {
      $('DIV#api_status').removeClass('available');
      console.log('class removed')
    }
  });
});
