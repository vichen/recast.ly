class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',

    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  handleSearch(e) {
    console.log('in search' + this.state.value);
    e.preventDefault();
    var parameter = {
      part: 'id,snippet',
      q: this.state.value,
      max: '5',
      videoEmbeddable: 'true',
      type: 'video',
      key: YOUTUBE_API_KEY,
    };
    console.log('from ajax ' + searchYouTube(parameter, this.props.doSearch));
    // this.props.doSearch(searchYouTube(parameter));
    // stuff is returned from SYT... need to pass that up to app?
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value}
        onChange={this.handleChange.bind(this)} onKeyPress={this.handleKey.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.handleSearch.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
window.Search = Search;
