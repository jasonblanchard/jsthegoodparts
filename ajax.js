
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
      //success: function(data) { alert(data.uri); },
      contentType: "application/json",
      dataType: 'json'
    });
  });
    
}

