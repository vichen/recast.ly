var searchYouTube = function (options, callback) {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: (stuff) => {
      callback.call(this, stuff.items);
    },  
    error: () => {  
      console.log('error in ajax');
    }});
  // };
};