import {useEffect, useState} from "react";
import {GetAllAccountType} from "../../api/AccountType";
import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../Loader/Loader";
import FilterBox from "../../components/FilterBox/FilterBox";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {GetAllAccountSpec} from "../../api/AccountSpec";

const AccountingType = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        // emptyInput()
    };
    const handleShow = () => setShow(true);


    const AccountTypeGetTabel = async () => {
        const data = await GetAllAccountType().catch(() => setError(true));
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.accountTypes)
    };


    useEffect(()=>{
        AccountTypeGetTabel();
    } , [])
    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item className={'beard_crumb'}>
                            <Link to={'/'}>
                                {'داشبورد'}
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item className={'beard_crumb'}>
                            <Link to={'/accountingMain'}>
                                {'حساب کل'}
                            </Link>
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
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button className={'btn_style'} onClick={handleShow}>
                                    {"افزودن حساب معین"}
                                </Button>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                    <Row>
                        <Col className={"position-relative"}>
                            <Alert style={{position:"fixed" , top:0 , left:0}} variant={"danger"}
                                   onClose={() => setErrorShow(false)} dismissible show={errorShow}>
                                {message}
                            </Alert>
                            <Alert  style={{position:"fixed" , top:0 , left:0}} variant={"success"}
                                    onClose={() => setSuccessShow(false)} dismissible show={successShow}>
                                {message}
                            </Alert>
                        </Col>
                    </Row>
                </Col>
                <Row>
                    <Col className={"d-flex p-5 w-100 col-12"}>
                        <Row className={"overflow-scroll d-flex w-100"}>
                            {account === undefined ?
                                <div className={"d-flex w-100 justify-content-center"}><Loader/></div> :
                                <table className={"table_block"}>
                                    <thead>
                                    <tr>
                                        <td className={"p-2"}>
                                            {"نام"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"حساب های معین"}
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
                                        account.map(
                                            item => <tr key={item.accountTypeId}>
                                                <td className={"p-2"}>{item.accountTypeName}</td>
                                                <td style={{width:"50%"}} className={"p-2"}>
                                                    <Button variant={"warning"}>
                                                        {"مشاهده"}
                                                    </Button>
                                                </td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    variant={"success"}
                                                    value={true}
                                                >{"فعال"}</Button> : <Button
                                                    variant={"secondary"}
                                                    value={false}
                                                >{"غیر فعال"}</Button>}</td>
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
                                            </tr>
                                        )
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


export default AccountingType;