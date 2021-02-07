import * as React from 'react';
import '../assets/App.css';
import * as API from '../api'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'jeongmin',
      posts: []
    }
  }

  async componentDidMount(){
    await API.getPost(1) //포스트 아이디에 맞는 값만 반환
    await API.getPosts() //포스트 값 전부 반환
    await API.modifyPost(1, {title: "new title", content: "new content"})
    //title에 맞는 포스트 값 수정
    await API.createPost({title: "created post", content: "created content"})
    //title과 post 생성
    await API.deletePost(3)
    //아이디에 맞는 값 삭제
    await API.getPosts()
  }

  render(){
    return (
      <div className="main">
        <div className="post-list"></div>
        <div className="post-body">

          <p>Title2</p>
          <p>Content {this.state.name}</p>

        </div>
      </div>
    );
  }
}

export default App;
