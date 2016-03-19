var searchYouTube = function (options, callback) {

  // var helper = () => {
  // var parameter = {
  //   part: 'id,snippet',
  //   query: 'corgis',
  //   max: '5',
  //   key: YOUTUBE_API_KEY
  // };
  // var searchinput = 'corgis';
  // var keyword = encodeURIComponent(options.query);
  // var ytURL = 'https://www.googleapis.com/youtube/v3/search';
  // gapi.client.setApiKey(YOUTUBE_API_KEY);
  // gapi.client.load('youtube', 'v3', function() {});
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: (stuff) => {
      // console.log('success from ajax');
      // console.log(stuff);
      // debugger;
      callback.call(this, stuff.items);
    },  
    error: () => {  
      console.log('error in ajax');
    }});
  // };
};