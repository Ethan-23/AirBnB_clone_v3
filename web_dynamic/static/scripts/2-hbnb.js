#!/usr/bin/node
$.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
  if ('status' in data && data.status === 'OK') {
    $('DIV#api_status').addClass('available');
  } else {
    $('DIV#api_status').removeClass('available');
  }
  console.log('test')
});
