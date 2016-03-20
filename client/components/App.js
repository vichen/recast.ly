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
      allVideos: null,
      autoplay: 0
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

  doClick () {
    if (this.state.autoplay) {
      this.setState({
        autoplay: 0
      });
    } else {
      this.setState({
        autoplay: 1
      });
    }
  }

  render () {
    return (
      <div>
        <Nav doSearch={this.doSearch.bind(this)} doClick={this.doClick.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer aVideo={this.state.currentVideo} autoplay={this.state.autoplay}/>
          </div>
          <div className="col-md-5">
            <VideoList allVideos={this.state.allVideos} changeMovie={this.changeMovie.bind(this)}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));