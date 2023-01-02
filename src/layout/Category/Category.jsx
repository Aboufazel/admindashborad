import {Breadcrumb, Col, Container, InputGroup, Row} from "react-bootstrap";
import '../main.style.css'
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";
import { styled } from "@stitches/react";

const Span = styled("span", {
    background: "#3c8dbc",
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 99999,
});

const columns = [
    {
        key: "title",
        title: "عنوان مقاله",
        width: 200,
    },
    {
        key: "release",
        title: "تاریخ انتشار",
        width: 200,
    },
    {
        key: "tags",
        title: "Tags",
        width: 200,
        render: (_, { tags }) => (
            <>
                {tags.map((tag, tagIndex) => (
                    <Span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
                        {tag}
                    </Span>
                ))}
            </>
        ),
    },
];

const data = [
    {
        title: "مقاله اول",
        release: "1401/10/25",
        tags: [  "حذف" , "ویرایش"],
    },
];

const Category = () => {
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