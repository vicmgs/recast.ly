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
      current: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  onClickTitle(i) {
    this.setState({
      current: exampleVideoData[i]
    });
  }

  render() {
    return (
      <div>
        <Nav />
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
