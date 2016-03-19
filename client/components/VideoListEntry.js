class VideoListEntry extends React.Component { 
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.changeMovie(this.props.aVideo);
  }

  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.aVideo.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.handleClick.bind(this)}>{this.props.aVideo.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.aVideo.snippet.description}</div>
        </div>
      </div>
    );
    
  }

}

window.VideoListEntry = VideoListEntry;
