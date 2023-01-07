import {Breadcrumb, Col, Container, InputGroup, Row} from "react-bootstrap";
import '../main.style.css'
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";
import { styled } from "@stitches/react";
import {useEffect, useState} from "react";
import {GetAllFromUser} from "../../api/Services";

const Span = styled("span", {
    background: "#3c8dbc",
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 99999,
});





const columns = [
    {
        key: "username",
        title: "نام کاربری",
        width: 200,
    },
    {
        key: "mobile",
        title: "شماره موبایل",
        width: 200,
    },{
        key: "email",
        title: "ایمیل",
        width: 200,
    },{
        key:"status",
        title:"وضعیت کاربر",
        width:200,
    },
    {
        key: "kind",
        title: "نوع کاربر",
        width: 200,
        render: (_, { kind }) => (
            <>
                {kind.map((tag, tagIndex) => (
                    <Span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
                        {tag}
                    </Span>
                ))}
            </>
        ),
    },
];



const Category = () => {
    const [data , setData] = useState([]);
    const [token , setToken] = useState({});

useEffect(()=>{
    const accessData = localStorage.getItem("auth");
    const object = JSON.parse(accessData);
    setToken({...token, [object.name]:object.value});
} , [])


useEffect( ()=>{
    if (token === undefined){
       console.log(token)
    }else {
        alert("salam")
    }
} , [])



  return(
      <Container>
          <Row>
              <Col>
                  <Breadcrumb>
                      <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                          {'داشبورد'}
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                          {'دسته بندی مقالات'}
                      </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
          <Row className={'main_block'}>
              <Col>
                  <Row>
                      <Col>
                          <p>
                              {'دسته بندی مقالات'}
                          </p>
                      </Col>
                  </Row>
                  <Row>
                      <FilterBox/>
                  </Row>
                  <Row>
                      <Col dir={'rtl'}>
                          <CustomTable data={data} columns={columns}/>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
  )
}


export default Category;