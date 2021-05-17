#!/usr/bin/node
$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if (data.status === 'OK') {
    $('DIV#api_status').addClass('available');
    console.log('class added')
  } else {
    $('DIV#api_status').removeClass('available');
    console.log('class removed')
  }
});
$.post('', '{}', function (data) {
  $.each(data, function (key, val));
    const title = $('')
    $('SECTION.places').append();
});

