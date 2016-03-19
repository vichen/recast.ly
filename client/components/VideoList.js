class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.allVideos.map(aVideo =>
          <VideoListEntry aVideo={aVideo} changeMovie={this.props.changeMovie}/>
        )}
      </div>
    );
  }
}
window.VideoList = VideoList;