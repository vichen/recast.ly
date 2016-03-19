class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  changeMovie (newVideo) {
    console.log('made it to parent');
    // debugger;
    this.setState({
      currentVideo: newVideo
    });
  }

  render () {
    return (
      <div>
        <Nav />
          <div className="col-md-7">
            <VideoPlayer aVideo={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList allVideos={this.state.allVideos} changeMovie={this.changeMovie.bind(this)}/>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));