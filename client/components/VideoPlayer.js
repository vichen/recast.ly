class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return ( 
      <div className="video-player">
      {this.props.aVideo.id.videoId === null ? 
        <div>No Video Loaded</div> 
        : 
        <div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`http://www.youtube.com/embed/${this.props.aVideo.id.videoId}?autoplay=${this.props.autoplay}`} allowFullScreen></iframe>
          </div>
          <div className="video-player-details">
            <h3>{this.props.aVideo.snippet.title}</h3>
            <div>{this.props.aVideo.snippet.description}</div>
          </div>
        </div>
      }
      </div>
    );
  }
}
window.VideoPlayer = VideoPlayer;
