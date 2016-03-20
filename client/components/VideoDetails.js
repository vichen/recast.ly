/* INCOMPLETE */

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
  } 

  // handleSearch(e) {
  //   var parameter = {
  //     id: this.props.aVideo.snippet.videoId,
  //     part: 'id,snippet,statistics',
  //     // q: this.state.value,
  //     // max: '5',
  //     videoEmbeddable: 'true',
  //     type: 'video',
  //     key: YOUTUBE_API_KEY, 
  //   };
  //   // console.log('holding');
  //   searchYouTube(parameter, this.props.doSearch);
  // }

  render() {
    return ( 
      <div className="video-details">
      {this.props.aVideo.id.videoId === null ? 
        <div>No Video Loaded</div> 
        : 
        <div>
          <div className="video-details-text">
            <h3>{this.props.aVideo.snippet.title}</h3>
            <div>{this.props.aVideo.snippet.description}</div>
          </div>
        </div>
      }
      </div>
    );
  }
}
window.VideoDetails = VideoDetails;


// var parameter = {
//       id: '4ZAEBxGipoA',
//       part: 'snippet,statistics',
//       key: YOUTUBE_API_KEY, 
//     };