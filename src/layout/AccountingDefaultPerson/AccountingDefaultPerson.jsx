import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../Loader/Loader";
import FilterBox from "../../components/FilterBox/FilterBox";
import Form from 'react-bootstrap/Form';
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {GetAllDefault} from "../../api/AccountDefaultPerson";


const AccountingDefaultPerson = ()=> {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "", name: ""});
    const [edit, setEdit] = useState({id: "", code: "", name: "", active: ""});
    const [show, setShow] = useState(false);
    const [canDelete , setCanDelete] = useState({id: ""});
    const [type , setType] = useState({id: ""});
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
     const CanDeleteData = [{id:"" , title:"انتخاب"} , {id:0 , title:"بله"} , {id:1 , title:"خیر"}];
     const TypeData = [{id:null , title:"هیچکدام"}];
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        emptyInput()
    };

    const manageCanDeleteSelectChange = (e) => {
        setCanDelete({id: e.target.value});
    }

    const manageTypeSelectChange = (e) => {
        setType({id: e.target.value});
    }


    const handleDeleteClose = () => {
        setDeleteModalShow(false);
    }

    const handleEditClose = () => {
        setEditShow(false);
        emptyInput()
    };
    const handleShow = () => setShow(true);

    const manageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const manageEditChange = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});

    }

    const emptyInput = () => {
        setValue({code: "", name: ""});
    };

    const AccountGetTable = async () => {
        const data = await GetAllDefault().catch(() => setError(true));
        console.log(data);
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.defaultPersons);
    }


    useEffect(()=>{
        AccountGetTable();
    } , [])

        const manageAddAccount = async () => {
        }


        const manageRemoveAccount = async (id) => {

        }

        const manageSendEditAccount = async () => {
        }


        const manageEditAccount = async (id) => {

        }

        const manageDeleteModal = (id) => {
            setDeleteModalShow(true);
            setDeleteModal(id);
        }

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
                            <Breadcrumb.Item active>
                                {'گروه حساب'}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row className={'main_block'}>
                    <Col>
                        <Row>
                            <Col>
                                <p>
                                    {'حساب تفضیلی'}
                                </p>
                                {
                                    waiting === true ?
                                        <div style={{left: 45}} className={'position-absolute'}>
                                            <Loader/>
                                        </div> : <div></div>
                                }
                            </Col>
                        </Row>
                        {/*<Row>*/}
                        {/*    <Col className={"position-relative"}>*/}
                        {/*        <Alert style={{position: "fixed", top: 0, left: 0, fontFamily: 'iran-sans'}}*/}
                        {/*               variant={"danger"}*/}
                        {/*               dismissible show={errorShow}>*/}
                        {/*            {message}*/}
                        {/*        </Alert>*/}
                        {/*        <Alert style={{position: "fixed", top: 0, left: 0, fontFamily: 'iran-sans'}}*/}
                        {/*               variant={"success"}*/}
                        {/*               dismissible show={successShow}>*/}
                        {/*            {message}*/}
                        {/*        </Alert>*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                        <Row className={"d-flex my-3 mb-5"}>
                            <Col>
                                <>
                                    <Button className={'btn_style'} onClick={handleShow}>
                                        {"افزودن حساب تفضیلی"}
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className={'modal_title'}>
                                                {"افزودن حساب"}
                                            </Modal.Title>
                                            {
                                                waiting === true ? <Loader/> : <div></div>
                                            }
                                        </Modal.Header>
                                        <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نوع حساب:"}</label>
                                                    <Form.Select
                                                        className={"w-50"}
                                                        defaultValue={type.id}
                                                        style={{fontFamily: 'iran-sans'}}
                                                        onChange={manageTypeSelectChange}>
                                                        <option>
                                                            {"انتخاب"}
                                                        </option>
                                                        {
                                                            TypeData.map(item => (
                                                                <option  value={item.id}>
                                                                    {item.title}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"کد حساب تفضیلی:"}</label>
                                                    <input name={"code"} onChange={manageChange} value={value.code}
                                                           className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نام حساب تفضیلی:"}</label>
                                                    <input name={"name"} onChange={manageChange} value={value.name}
                                                           className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"امکان حذف:"}</label>
                                                    <Form.Select
                                                        className={"w-50"}
                                                        style={{fontFamily: 'iran-sans'}}
                                                        defaultValue={canDelete.id}
                                                        onChange={manageCanDeleteSelectChange}>
                                                        {
                                                            CanDeleteData.map(item => (
                                                                <option value={item.id}>
                                                                    {item.title}
                                                                </option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className={'close_btn'} onClick={handleClose}>
                                                {"بستن"}
                                            </Button>
                                            <Button onClick={() => manageAddAccount()} className={'save_btn'}>
                                                {"ذخیره"}
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal show={editShow} onHide={handleEditClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className={'modal_title'}>
                                                {"ویرایش حساب"}
                                            </Modal.Title>
                                            {
                                                waiting === true ? <Loader/> : <div></div>
                                            }
                                        </Modal.Header>
                                        {loading === true ?
                                            <div className={"d-flex w-100 justify-content-center"}><Loader/>
                                            </div> :
                                            <Modal.Body
                                                class={'d-flex flex-column justify-content-start p-3'}>
                                                <Row className={"my-3"}>
                                                    <Col className={"d-flex align-items-center col-12"}>
                                                        <label style={{fontFamily: 'iran-sans'}}
                                                               className={"me-2"}>{"کد حساب تفضیلی:"}</label>
                                                        <input name={"code"} onChange={manageEditChange}
                                                               value={edit.code} className={'p-2'}/>
                                                    </Col>
                                                </Row>
                                                <Row className={"my-3"}>
                                                    <Col className={"d-flex align-items-center col-12"}>
                                                        <label style={{fontFamily: 'iran-sans'}}
                                                               className={"me-2"}>{"نام حساب تفضیلی:"}</label>
                                                        <input name={"name"} onChange={manageEditChange}
                                                               value={edit.name} className={'p-2'}/>
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                        }
                                        <Modal.Footer>
                                            <Button className={'close_btn'} onClick={handleEditClose}>
                                                {"بستن"}
                                            </Button>
                                            <Button onClick={() => manageSendEditAccount()} className={'save_btn'}>
                                                {"ویرایش"}
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <Modal style={{fontFamily: 'iran-sans'}} show={deleteModalShow}
                                           onHide={handleClose}>
                                        <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                            {"آیا از حذف حساب اطمینان دارید؟"}
                                            <Row className={"d-flex flex-row justify-content-center"}>
                                                <Col
                                                    className={"d-flex flex-row-reverse gap-3 mt-3 flex-row justify-content-center col-12"}>
                                                    <Button className={'save_btn'} onClick={handleDeleteClose}>
                                                        {"انصراف"}
                                                    </Button>
                                                    <Button className={'close_btn'}
                                                            onClick={() => manageRemoveAccount(deleteModal)}>
                                                        {"حذف"}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    </Modal>
                                </>
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
                                    <div className={"d-flex w-100 justify-content-center"}><Loader/></div> :
                                    <table className={"table_block"}>
                                        <thead>
                                        <tr>
                                            <td className={"p-2"}>
                                                {"کد گروه حساب"}
                                            </td>
                                            <td className={"p-2"}>
                                                {"نام گروه حساب"}
                                            </td>
                                            <td className={"p-2"}>
                                                {"حساب های لینک شده"}
                                            </td>
                                            <td className={"p-2"}>
                                                {"وضعیت حساب"}
                                            </td>
                                            <td className={"p-2"}>
                                                {"عملیات"}
                                            </td>
                                        </tr>
                                        </thead>
                                        {/*<tbody>*/}
                                        {/*{*/}
                                        {/*    account.map(item => (*/}
                                        {/*        <tr key={item.accountGroupId}>*/}
                                        {/*            <td className={"p-2"}>{item.accountGroupCode}</td>*/}
                                        {/*            <td className={"p-2"}>{item.accountGroupName}</td>*/}
                                        {/*            <td className={"p-2"}><Button*/}
                                        {/*                onClick={() => manageAccountMain(item.accountGroupId)}*/}
                                        {/*                variant={"warning"}>{"مشاهده"}</Button>*/}
                                        {/*            </td>*/}
                                        {/*            <td className={"p-2"}>{item.isActive === true ? <Button*/}
                                        {/*                onClick={() => manageActive(item.accountGroupId, !item.isActive)}*/}
                                        {/*                variant={"success"} value={true}>{"فعال"}</Button> : <Button*/}
                                        {/*                onClick={() => manageActive(item.accountGroupId, !item.isActive)}*/}
                                        {/*                variant={"secondary"} value={false}>{"غیر فعال"}</Button>}</td>*/}
                                        {/*            <td className={"d-flex justify-content-center gap-2 p-2"}>*/}
                                        {/*                <ActionTableButton color={"--text-color-white"}*/}
                                        {/*                                   bgColor={"--color-warning"}*/}
                                        {/*                                   tooltip={"ویرایش"}*/}
                                        {/*                                   icon={faEdit}*/}
                                        {/*                                   onClick={() => manageEditAccount(item.accountGroupId)}/>*/}

                                        {/*                <ActionTableButton color={"--text-color-white"}*/}
                                        {/*                                   bgColor={"--color-danger"}*/}
                                        {/*                                   tooltip={"حذف کاربر"}*/}
                                        {/*                                   icon={faTrash}*/}
                                        {/*                                   onClick={() => manageDeleteModal(item.accountGroupId)}/>*/}
                                        {/*            </td>*/}
                                        {/*        </tr>*/}
                                        {/*    ))*/}
                                        {/*}*/}
                                        {/*</tbody>*/}
                                    </table>
                                }
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        )
    }


export default AccountingDefaultPerson;