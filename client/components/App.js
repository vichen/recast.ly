class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        id: {videoId: null},
        snippet: {
          title: null,
          description: null
        }
      },
      allVideos: null
    };
  }

  changeMovie (newVideo) {
    this.setState({
      currentVideo: newVideo
    });
  }

  doSearch (newList) {
    // debugger;
    if (this.state.currentVideo.id.videoId === null) {
      this.setState({
        currentVideo: newList[0]
      });
    }
    if (newList[0]) {
      this.setState({   
        allVideos: newList
      });
    }
  }

  render () {
    return (
      <div>
        <Nav doSearch={this.doSearch.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer aVideo={this.state.currentVideo}/>
            <VideoDetails aVideo={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList allVideos={this.state.allVideos} changeMovie={this.changeMovie.bind(this)}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));