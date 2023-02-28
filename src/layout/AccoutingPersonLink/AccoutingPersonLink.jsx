import {
    AddDefaultPersonLink,
    GetAllPersonLinks,
    GetByPersonId,
    GetDefaultPersonLinkById
} from "../../api/AccountPersonLink";
import {useContext, useEffect, useState} from "react";
import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loader from "../../Loader/Loader";
import Form from "react-bootstrap/Form";
import FilterBox from "../../components/FilterBox/FilterBox";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {GetAllAccountSpec} from "../../api/AccountSpec";
import {AddAccountSpecType} from "../../api/AccountSpecType";
import {GiveIdContext} from "../../Context/GiveId";

const AccoutingPersonLink = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [specValue, setSpecValue] = useState({id: ""});
    const [specReload, setSpecReload] = useState(false);
    const [show, setShow] = useState(false);
    // const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    // const [loading, setLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [mainSelectShow, setMainSelectShow,] = useState(false);
    const [specSelectShow, setSpecSelectShow,] = useState(false);
    const [reload, setReload] = useState(false);
    const [accountSpec, setAccountSpec] = useState(undefined);

    const TypeId = useContext(GiveIdContext);


    const manageTableData = async () => {
        const tableData = await GetDefaultPersonLinkById(TypeId.authData).catch(() => alert('error'));
        setAccount(tableData.data.defaultPersonLinks)
    }

    const manageSpecSelectChange = (e) => {
        setSpecValue({id: e.target.value});
        setSpecReload(!specReload);
    }

    const GetSpecAccount = async () => {
        setDataLoading(true);
        const accountSpecData = await GetAllAccountSpec().catch(() => setError(true));
        if (accountSpecData.status === 200) {
            setDataLoading(false);
            setSpecSelectShow(true);
        }
        setAccountSpec(accountSpecData.data.accountSpecs);
    }


    const AddDefaultPersonLink = async (personId, specId) => {
        setDataLoading(true);
        const sendSaveData = await AddAccountSpecType(personId, specId).catch(() => setError(true));
        console.log(sendSaveData)
    };


    const manageEdit = (id) => {
        console.log(id)
    }


    useEffect(() => {
        manageTableData();
    }, [reload])


    useEffect(() => {
        GetSpecAccount();
    }, [specReload])


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    // useEffect(()=>{
    //     manageTableData();
    // } , [])
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
                            <Link to={'/accountingDefaultPerson'}>
                                {'حساب تفضیلی'}
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
                                {'نوع حساب'}
                            </p>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button onClick={handleShow} className={'btn_style'}>
                                    {"افزودن حساب"}
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب معین"}
                                        </Modal.Title>
                                        {
                                            dataLoading === true ? <Loader/> : <div></div>
                                        }
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"حساب معین:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                {
                                                    <Form.Select
                                                    defaultValue={specValue.id}
                                                    onChange={manageSpecSelectChange}>
                                                    <option selected={true}>
                                                        {"حساب معین"}
                                                    </option>
                                                    {
                                                        accountSpec === undefined ?
                                                            <option>
                                                                {"حساب کل انتخاب نشده است"}
                                                            </option> : accountSpec.map(
                                                                item => (
                                                                    <option
                                                                        value={item.accountSpecId}>
                                                                        {item.accountSpecName}
                                                                    </option>
                                                                )
                                                            )
                                                    }
                                                </Form.Select>
                                                }
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => AddDefaultPersonLink(TypeId.authData, specValue.id)}
                                                className={'save_btn'}>
                                            {"ذخیره"}
                                        </Button>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                    <Row>
                        <Col className={"position-relative"}>
                            <Alert style={{position: "fixed", top: 0, left: 0}} variant={"danger"}
                                   onClose={() => setErrorShow(false)} dismissible show={errorShow}>
                                {message}
                            </Alert>
                            <Alert style={{position: "fixed", top: 0, left: 0}} variant={"success"}
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
                                            {"نام حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"عملیات"}
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account === [] ?
                                            <tr>
                                                <td>
                                                    {"حساب معین برای این نوع حساب وجود ندارد"}
                                                </td>
                                            </tr> : account.map(
                                                item => <tr key={`person-link-${item.accountTypeId}`}>
                                                    <td className={"p-2 w-75"}>{item.accountSpecName}</td>
                                                    <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                        <ActionTableButton color={"--text-color-white"}
                                                                           bgColor={"--color-warning"}
                                                                           tooltip={"ویرایش"}
                                                                           icon={faEdit}
                                                                           onClick={() => manageEdit(item.accountTypeId)}
                                                        />

                                                        <ActionTableButton color={"--text-color-white"}
                                                                           bgColor={"--color-danger"}
                                                                           tooltip={"حذف حساب"}
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


export default AccoutingPersonLink;