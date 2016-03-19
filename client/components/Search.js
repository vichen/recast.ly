class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSearch(e) {
    console.log('in search');
    e.preventDefault();
    searchYouTube();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleSearch.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
window.Search = Search;
