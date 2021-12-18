import React, { useState } from 'react';
import "./App.css"
//{}안에는 함수, 상태값들이 들어간다
//일단 1딘계는 use State 선언한다.

const App = () => {
    const [hiseon, setHiseon] = useState("powermovie's App")
    //useState 값들의 함수 이름과 표시할 명칭과 텍스트 등의 콘텐츠들을 입력해둔다
    //표시될 콘텐츠는 임의로 입력해준다.

    return (
        <div>
          <h1>
              {hiseon}
              {/*선언한 함수 값을 입력해준다*/}
          </h1>
        </div>
    );
};

export default App;
