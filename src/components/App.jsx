// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {exampleVideoData}/>
//     </div>
//   </div>
// );
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: emptyVideo[0],
      videoList: emptyVideo,
      search: ''
    };
  }

  onClickTitle(i) {
    this.setState({
      current: this.state.videoList[i]
    });


  }

  onSearch(evt) {
    this.setState({
      search: evt.target.value
    });

    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: this.state.search, max: 10}, 
        (data)=>{ this.setState({current: data[0], videoList: data}); });
  }

  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: this.state.search, max: 10}, 
      (data)=>{ this.setState({current: data[0], videoList: data}); });
  }

  render() {
    return ( 
      <div>
        <Nav onChange={this.onSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.current}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onClickTitle.bind(this)} videos = {this.state.videoList}/>
        </div>
      </div>
    );    
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
