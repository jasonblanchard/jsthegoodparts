
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
    url: 'http://144.118.69.149/drupaltesting/test/node.json',
    success: function(data) { insertNodes(data) },
    dataType: 'json',
  });
}

getNodes();

function getNodeContent(nid) {
  $.ajax({
    type: 'GET',
    url: 'http://144.118.69.149/drupaltesting/test/node/' + nid + ".json",
    success: function(data) { parseNodeContent(data); },
    dataType: 'json',
  });
};

var nodeContents = [];

function parseNodeContent(data) {
  var nodeId = data.nid;
  if (data.body.und) {
    var nodeBody = data.body.und[0].value;
  }
  nodeContents[nodeId] = nodeBody;
}


function insertNodes(data) {
  $('.drupal-nodes').text('');
  $(document).ready( function() {
    for (var key in data) {
      $('.drupal-nodes').append("<div>" + data[key].title + "</div>");
    };
  });
}

