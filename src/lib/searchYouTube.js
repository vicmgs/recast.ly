var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + options.key + '&maxResults=' + options.max + '&q=' + options.query,
    type: 'GET',
    success: function(data) {
      callback(data.items);
    }
    // data: {
    //   q: options.query,
    //   maxResults: options.max,
    //   key: options.key,
    //   part: 'snippet',
    //   videoEmbeddable: true
    // }
    

  });
};

window.searchYouTube = searchYouTube;
