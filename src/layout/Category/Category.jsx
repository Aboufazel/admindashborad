import {Breadcrumb, Col, Container, InputGroup, Row} from "react-bootstrap";
import '../main.style.css'
import FilterBox from "../../components/FilterBox/FilterBox";
import CustomTable from "../../components/CustomTable/CustomTable";
import { styled } from "@stitches/react";

const Span = styled("span", {
    background: "#596b7e",
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 99999,
});

const columns = [
    {
        key: "fullName",
        title: "Full Name",
        width: 200,
    },
    {
        key: "role",
        title: "Role",
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
        fullName: "Francisco Mendes",
        role: "Full Stack",
        tags: ["dev", "blogger"],
    },
    {
        fullName: "Ricardo Malva",
        role: "Social Media Manager",
        tags: ["designer", "photographer"],
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