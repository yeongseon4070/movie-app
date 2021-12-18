import React, { useEffect, useState } from 'react';
//4단계에서는 useEffect 를 선언해준다. 어떠한 효과를 부여할것인가.
import "./App.css"
//{}안에는 함수, 상태값들이 들어간다
//일단 1딘계는 use State 선언한다.

const App = () => {
    const [hiseon, setHiseon] = useState("")
    //useState 값들의 함수 이름과 표시할 명칭과 텍스트 등의 콘텐츠들을 입력해둔다
    //표시될 콘텐츠는 임의로 입력해준다.

    useEffect(() =>{
        setTimeout(() =>{
            setHiseon("gfhghgjhjghkjkhjhkkjh")

        }, 3000)
    },[])
    //useEffect 선언을 함에 있어서 타임아웃을 거쳐서 표시를 하겠다. 3초 뒤에 해당 문구를 표시하도록 하겠다라는 명령어임.
    

    return (
        <div>
          <h1>
              {/*선언한 함수 값을 입력해준다*/}
              {hiseon}
          </h1>
        </div>
    );
};

export default App;
