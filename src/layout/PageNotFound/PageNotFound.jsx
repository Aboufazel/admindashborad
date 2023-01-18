import NotFound from "../../assets/pics/error404.png"
import {Col, Row} from "react-bootstrap";

const PageNotFound = ()=>{

    return(
        <Row className={""}>
            <Col className={"d-flex align-items-center justify-content-center col-12"}>
                <img src={NotFound} alt={"صفحه پیدا نشد"}/>
            </Col>
        </Row>
    )
}





export default PageNotFound;
