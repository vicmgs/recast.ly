var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: true,
      type: 'video'
    }
    

  });
};

window.searchYouTube = searchYouTube;
