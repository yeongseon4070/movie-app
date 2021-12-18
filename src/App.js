import React, { useEffect, useState } from 'react';
//4단계에서는 useEffect 를 선언해준다. 어떠한 효과를 부여할것인가.
//{}안에는 함수, 상태값들이 들어간다
//일단 1딘계는 use State 선언한다.
import axios from "axios";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Container} from "reactstrap"
//순서는 상관없이 나열하고 가져다가 쓰면 되는거임
const App = () => {
    const [hiseon, setHiseon] = useState([])
    //useState 값들의 함수 이름과 표시할 명칭과 텍스트 등의 콘텐츠들을 입력해둔다
    //표시될 콘텐츠는 임의로 입력해준다.

    const getHiseon = async () =>{
        await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(services =>{
                console.log(services.data.results)
                //내가 위 링크의 데이터를 받아오기 위해서 명칭을 정해주고(위링크의 전체적인 명칭을 정해준것임)
                //그리고 해당 부분을 이름을 정해서 앞에 넣어주고, 테스트 해서 커맨드+옵션+i 를 통해서 데이터 처리 값들을 보면서
                //설정을 해야한다. 그리고 마지막의 리절트 값이 들어간 이유는 해당 데이터의 처리발식이 유저스테이트와 동일하게 해아하기 때문이다.
                setHiseon(services.data.results)
                //그리고 해당 유저스테이트 부분에서 셋하이선의 값들이 하이선에 담기겠다라는 선언을 해준것이다.
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() =>{
        getHiseon()
    },[])
    //useEffect 선언을 함에 있어서 타임아웃을 거쳐서 표시를 하겠다. 3초 뒤에 해당 문구를 표시하도록 하겠다라는 명령어임.


    return (
        <div>
          <h1>
              {/*선언한 함수 값을 입력해준다*/}
              {hiseon.length}
              {/*5단계 해당 부분 담기는 값들의 표시 개수 설정을 위해서 하이선의 개수 표시 함수를 넣어준다.*/}
          </h1>
            <Container>
                <Row>
                    {hiseon.map(hi => (
                        <Col>
                            <Card
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {hi.original_name}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {hi.first_air_date}
                                    </CardSubtitle>
                                    <CardText>
                                        {hi.overview}
                                    </CardText>

                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/*hiseon의 함수에대한 값들을 뿌려주기 위해서*/}
            {/*해당 부분에서 데이터 값들을 보고 여러개의 정보들을 뿌려주겠다라는걸 map으로 선언해준다.*/}
            {/*그리고 해당 명칭을 임의로 지정해서 임력해둔다. 그리고 함수의 값을 명칭+ 데이터의 종류값들을 입력해둔다.*/}
        </div>
    );
};

export default App;
