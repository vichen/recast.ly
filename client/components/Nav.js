class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search doSearch={this.props.doSearch}/>
        </div>
      </nav>

    );
  }
}

window.Nav = Nav;
