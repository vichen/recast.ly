class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = _.debounce(this.handleSearch, 400, true);

    this.state = {
      value: '',

    };
  }

  componentDidMount () {
    this.handleSearch();
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSearch(e) {
    var parameter = {
      part: 'id,snippet',
      q: this.state.value,
      max: '5',
      videoEmbeddable: 'true',
      type: 'video',
      key: YOUTUBE_API_KEY, 
    };
    // console.log('holding');
    searchYouTube(parameter, this.props.doSearch);
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
