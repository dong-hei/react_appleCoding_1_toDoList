import './App.css';
import { useState } from 'react';

function App() {
  let [글제목,titleBinding] = useState(['자바스크립트 공부하기','리액트 공부하기','개인 토이 프로젝트 구현하기','오늘할일!']);
  let [like,likeBinding] = useState(0);
  let [modal, setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');

  // 동적인 UI 사용을 위함
 
  // a는 저장된 값 b는 state 변경을 도와주는 함수
  //자료를 저장할수있는 usestate문법 -> 변경사항이 많은 데이터에 자동 랜더링 되기때문에 사용한다. 
  // 데이터 바인딩값

  return (
    // jsx에서 클래스 지정해줄때는 className
    <div className="App">
     <div className="black-nav">
      <h4>자기 블로그 보여주기</h4>     
     </div>

     <button onClick={() => {
      let copy = [...글제목];
      copy[0] = '슬램덩크 보기';
      //[...]는 괄호에 있는 거 벗어서 바인딩 할게요!
      // 기존 State와 신규 State가 변경된게 없다고 생각하기때문에 
      //   let copy = title;
      // copy[0] = '슬램덩크 보기';
      //       titleBinding(title); 이 방식으로는 불러올수가없다.
      titleBinding(copy);
  
     }}> 글수정 </button>
     
     <button onClick={() =>{
      let copy = [...글제목];
      copy.sort();

      titleBinding(copy);

     }}>가나다순 정렬</button>

     {
      글제목.map(function(a,i){
        return(
          <div className="list">
            <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}</h4><span onClick={() => {likeBinding(like+1)}}>👍</span>
            <p>3월28일</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              titleBinding(copy);
            }}>삭제</button>
          </div>
        ) //비슷한 html 반복생성하고싶을때 map() 함수를 사용하라
      }) //return 있는걸 array에 담아줌
     }

<input onChange={(e)=>{입력값변경(e.target.value); console.log(입력값)}} /> <button onClick={() => {
  let copy=[...글제목]; 
  copy.unshift(입력값);
  titleBinding(copy)
  }}>글 생성</button>
{/* onChange는 유저가 타이핑할때마다 값이 바뀐다 */}

{
// 자바스크립트 코드로 if문을 쓰고싶을때
// 삼항 연산자 : 조건식 ? 가 참일때 실행할 코드 : 거짓일때 실행할 코드
  modal == true ? <Modal titleBinding={titleBinding} color={'skyblue'} title={title} 글제목={글제목}/> : null

}   
    <h4 style={{color: 'gray', fontSize:'20px'}}>{글제목[3]}</h4>     
    </div>
    //  변수 넣을떄는 중괄호
    // react onlcik은 함수명만 넣어놓고서 쓴다.
    // state 변경하는법 likeBinding 함수를 가져와서
    // style 넣을때 style={{스타일명:'값'}}로 만들어도된다.
// html 태그 안에는 하나의 태그 안에는 하나의 태그로 끝내야됨. 병렬로 태그 2개 이상 기입 금지
//병렬로 2개 기입하고싶을때 태그 맨앞과 뒤에 <> </> 사용
);
}

// 컴포넌트 만들기
//언제 컴포넌트를 사용하는게 좋을까
//1 반복적인 html 축약이 필요할때
//2. 큰페이지 사용할때 컴포넌트 사용해주면 좋다
//3. 자주 변경되는 것들에 사용해주면 좋다.

//단점!
//state 가져다 쓸때 문제가 생긴다.
function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
    <h4>{props.글제목[props.title]}</h4>
    <p>반가워요</p>
    <button>글 수정</button>
    </div>
  )
}

export default App;