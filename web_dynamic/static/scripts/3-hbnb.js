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
      console.log('class added');
    } else {
      $('DIV#api_status').removeClass('available');
      console.log('class removed');
    }
  });
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    dataType: 'json',
    data: '{}',
    success: function (data) {
      console.log(data);
      $.each(data, function (key, place) {
        console.log(place);
        const article = $('<article></article>');
        const title = $('<div class="title_box"></div>');
        const name = $('<h2>' + place.name + '</h2>');
        const price = $('<div class="price_by_night">$' + place.price_by_night + '<div>');
        title.append(name, price);
        const info = $('<div class="information"></div>');
        const guest = $('<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest > 1 ? 's' : '') + '</div>');
        const room = $('<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms > 1 ? 's' : '') + '</div>');
        const bath = $('<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms > 1 ? 's' : '') + '</div>');
        info.append(guest, room, bath);
        const description = $('<div class="description">' + place.description + '</div>');
        article.append(title, info, description);
        $('SECTION.places').append(article);
      });
    }
  });
});
