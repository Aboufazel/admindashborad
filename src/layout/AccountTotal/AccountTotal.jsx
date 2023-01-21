import {Breadcrumb, Button, Col, Container, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import {useContext, useEffect, useState} from "react";
import {GiveIdContext} from "../../Context/GiveId";
import {GetAllAccountMain} from "../../api/AccountMain";
import {GetAllAccountSpec} from "../../api/AccountSpec";
import {useNavigate} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


const AccountTotal = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const MainId = useContext(GiveIdContext);
    const navigate = useNavigate();


    const AccountُSpecGetTabel = async () => {
        const data = await GetAllAccountSpec().catch(() => setError(true));
        console.log(data.data);
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.accountMains)
    };

useEffect(()=>{
    AccountُSpecGetTabel()
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
                          {'حساب معین'}
                      </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
          <Row className={'main_block'}>
              <Col>
                  <Row className={'mb-3'}>
                      <Col lg={1}>
                          <p className={'mt-1'}>
                              {'حساب معین'}
                          </p>
                      </Col>
                      <Col>

                      </Col>
                  </Row>
                  <Row>
                      <FilterBox/>
                  </Row>
              </Col>
              <Row>
                  <Col className={"d-flex p-5 w-100 col-12"}>
                      <Row className={"overflow-scroll d-flex w-100"}>
                          {account === undefined ?
                              <div className={"d-flex w-100 justify-content-center"}><BeatLoader color="#3c8dbc"/>
                              </div> :
                              <table className={"table_block"}>
                                  <thead>
                                  <tr>
                                      <td className={"p-2"}>
                                          {"کد حساب معین"}
                                      </td>
                                      <td className={"p-2"}>
                                          {"نام حساب معین"}
                                      </td>
                                      <td className={"p-2"}>
                                          {"وضعیت حساب"}
                                      </td>
                                      <td className={"p-2"}>
                                          {"عملیات"}
                                      </td>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {
                                      account.map(item => (
                                          item.accountMainId === MainId.authData ? <tr key={item.accountSpecId}>
                                                  <td className={"p-2"}>{item.accountSpecCode}</td>
                                                  <td className={"p-2"}>{item.accountSpecName}</td>
                                                  <td className={"p-2"}>{item.isActive === true ? <Button
                                                      variant={"success"} value={true}>{"فعال"}</Button> : <Button
                                                      variant={"danger"} value={false}>{"غیر فعال"}</Button>}</td>
                                                  <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                      <ActionTableButton color={"--text-color-white"}
                                                                         bgColor={"--color-warning"}
                                                                         tooltip={"ویرایش"}
                                                                         icon={faEdit}
                                                      />

                                                      <ActionTableButton color={"--text-color-white"}
                                                                         bgColor={"--color-danger"}
                                                                         tooltip={"حذف کاربر"}
                                                                         icon={faTrash}
                                                      />
                                                  </td>
                                              </tr> :
                                              <Row className={"d-flex align-items-center justify-content-center p-3"}>
                                                  {"حساب کل برای این گروه حساب وجود ندارد"}
                                              </Row>
                                      ))
                                  }
                                  </tbody>
                              </table>
                          }
                      </Row>
                  </Col>
              </Row>
          </Row>
      </Container>
  )
}

export default AccountTotal;