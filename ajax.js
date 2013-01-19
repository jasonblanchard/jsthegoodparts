
function submitNode(title, body) {
  $(document).ready( function() {

    var data = {
      type: 'article',
      title: title,
      body: {
        und: [{
          value: body
        }]
      },
    };

    $.ajax({
      type:'POST',
      url: "http://144.118.69.149/drupaltesting/test/node",
      data: JSON.stringify(data),
      success: function(data) { getNodes(); },
      contentType: "application/json",
      dataType: 'json'
    });
  });
    
}

function getNodes() {
  $.ajax({
    type:'GET',
    url: 'http://144.118.69.149/drupaltesting/test/views/articles',
    success: function(data) { insertNodes(data) },
    dataType: 'json',
  });
}

getNodes();

function insertNodes(data) {
  console.log(data);
  $('.drupal-nodes').text('');
  $(document).ready( function() {
    for (var key in data) {
      $('.drupal-nodes').append("<div><h3>" + data[key].title + "</h3></div>");
      if (data[key].body.und[0]) {
        $('.drupal-nodes').append("<div>" + data[key].body.und[0].value + "</div>");
        }
    };
  });
}

