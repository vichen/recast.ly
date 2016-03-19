class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.allVideos === null ? <div className="video-list-entry">No videos</div> : 
        this.props.allVideos.map(aVideo =>
          <VideoListEntry aVideo={aVideo} changeMovie={this.props.changeMovie}/>
        )}
      </div>
    );
  }
}
window.VideoList = VideoList;