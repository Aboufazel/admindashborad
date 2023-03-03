import {Col, Container, Row} from "react-bootstrap";
import '../main.style.css'
import StatusCard from "../../components/StatusCard/StatusCard";
import useStorage from "../../hooks/storage";
import {useNavigate} from "react-router-dom";


const Main = () => {
    const [authInfo, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
        isLogin: false,
    })

    const storageData = JSON.parse(localStorage.getItem('auth'));
    const navigate = useNavigate();


    return(

        storageData.userId === "" ? () => {
                setAuthInfo({isLogin: false})
                localStorage.clear();
                alert("نیاز به ورود دارید")
                navigate('/login')
            } :
      <Container>
          <Row className={'main_block'}>
              <Col>
                  <p>
                      {'داشبور نرم افزار حسابداری'}
                  </p>
                  <Row>
                      <Col>
                          <StatusCard bgColor={'--color-danger'} title={'گزارش حسابداری'}/>
                      </Col>
                      <Col>
                          <StatusCard bgColor={'--color-success'} title={'گزارش کلی کاربران'}/>
                      </Col>
                      <Col>
                          <StatusCard bgColor={'--color-warning'} title={'گزارش فروش'}/>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}

export default Main;