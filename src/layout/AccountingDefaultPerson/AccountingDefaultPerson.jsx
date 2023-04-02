import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../Loader/Loader";
import FilterBox from "../../components/FilterBox/FilterBox";
import Form from 'react-bootstrap/Form';
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {
    AddDefaultPerson,
    EditDefaultPerson,
    GetAllDefault,
    GetForEditDefault,
    RemoveDefaultAccount
} from "../../api/AccountDefaultPerson";
import {GiveIdContext} from "../../Context/GiveId";
import {AccountTypeGetById, GetAllAccountType} from "../../api/AccountType";
import {AccountDefaultPerson} from "../../data/Database/AccounttDefaultPerson";


const AccountingDefaultPerson = () => {
    const [account, setAccount] = useState(undefined);
    const [typeValue, setTypeValue] = useState("");
    const [instinct, setInstinct] = useState("");
    const [always,setAlways] = useState("");
    const [typeName , setTypeName] = useState(undefined)
    const {state, dispatch} = useContext(GiveIdContext);
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "", name: ""});
    const [edit, setEdit] = useState({typeId: "", id: "", code: "", name: "", delete: "" , instinct:"" , always:"" });
    const [show, setShow] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [type, setType] = useState({id: ""});
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [accountType, setAccountType] = useState(undefined);
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        emptyInput()
    };

    const manageCanDeleteSelectChange = () => {
        setCanDelete(!canDelete);
    }

    const manageEditeCanDelete = (e) =>{
        console.log(e.target.value)
        setCanDelete(e.target.value === 1 ? 1 : true)
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

    const AccountTypeGetTabel = async () => {
        const data = await GetAllAccountType().catch(() => setError(true));
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccountType(data.data.accountTypes)
    };


    const AccountGetTable = async () => {
        const data = await GetAllDefault().catch(() => setError(true));
        console.log(data)
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.defaultPersons);
    }


    useEffect(() => {
        AccountGetTable();
    }, [reload])


    useEffect(() => {
        AccountTypeGetTabel();
    }, [reload])

    const manageAddAccount = async () => {
        console.log(canDelete)
        console.log(typeValue)
        const sendData = await AddDefaultPerson(typeValue === "هیچکدام" ? 0 : typeValue , value.code , value.name , canDelete === true ? 0 : 1 , instinct , always)
        if (sendData.data.isSuccess === true) {
            setMessage(sendData.data.message);
            setTypeValue("");
            setShow(false);
            setCanDelete(false);
            setSuccessShow(true);
            emptyInput()
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(sendData.data.message);
            setCanDelete(false)
            setShow(false);
            setErrorShow(true);
            setTypeValue("");
            emptyInput()
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }
    }


    const manageRemoveAccount = async (id) => {
        setWaiting(true);
        setDeleteModalShow(false);
        const removeResponse = await RemoveDefaultAccount(id);
        if (removeResponse.data.isSuccess === false) {
            setMessage(removeResponse.data.message);
            setErrorShow(true);
            setWaiting(false);
            setTimeout(() => {
                setErrorShow(false);
                setMessage("");
            }, 1000)
        } else if (removeResponse.data.isSuccess === true) {
            setMessage(removeResponse.data.message);
            setWaiting(false);
            setSuccessShow(true);
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false);
                setMessage("");
            }, 1000)
        }
    }

    const manageSendEditAccount = async () => {
        console.log(canDelete)
        setWaiting(true)
        const sendEditData = await  EditDefaultPerson(edit.typeId ,edit.id ,edit.code , edit.name ,
            canDelete === false ? 0 : 1  , edit.instinct , edit.always);
        if (sendEditData.data.isSuccess === true) {
            setLoading(!setReload(!reload));
            setWaiting(false);
            setCanDelete({id:""})
            setSuccessShow(true);
            setTypeName("")
            setEditShow(false);
            setMessage(sendEditData.data.message);
            setTimeout(() => {
                setSuccessShow(false);
            }, 2500)
        } else {
            setMessage(sendEditData.data.message);
            setEditShow(false)
            setWaiting(false)
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false);
            }, 2500)
        }
    }


    const manageEditAccount = async (id , typeId) => {
        console.log(typeId)
        setEditShow(true);
        setLoading(true);
        const editData = await GetForEditDefault(id).catch();
        const getResponse = await AccountTypeGetById(typeId).catch();
        if (getResponse.data === null){
            setLoading(false)
        }else {
            console.log(getResponse)
            setTypeName({
                name: getResponse.data.accountTypeName,
            })
            if (getResponse.status === 200) {
                setLoading(false)
            } else {
                setEditShow(false)
            }
        }
        setEdit({
            typeId: editData.data.accountTypeId,
            id: editData.data.defaultPersonId,
            code: editData.data.defaultPersonCode,
            name: editData.data.defaultPersonName,
            delete: editData.data.canDelete
        })


        if (editData.status === 200) {
            setLoading(false)
        } else {
            setEditShow(false)
        }
    }

    const manageDeleteModal = (id) => {
        setDeleteModalShow(true);
        setDeleteModal(id);
    }

    const manageDefaultPersonsLink = (id) => {
        console.log(id)
        dispatch({type: 'UserData', payload: id});
        navigate("/personsLink")
    }

    const manageTypeSelectChange = (e) => {
        setTypeValue(e.target.value);
    }

    const manageInstictSelectChange = (e) =>{
        console.log(e.target.value)
        setInstinct(e.target.value)
    }

    const manageAlwaysSelectChange = (e) =>{
        console.log(e.target.value)
        setAlways(e.target.value)
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
                    <Row>
                        <Col className={"position-relative"}>
                            <Alert style={{position: "fixed", top: 0, left: 0, fontFamily: 'iran-sans'}}
                                   variant={"danger"}
                                   dismissible show={errorShow}>
                                {message}
                            </Alert>
                            <Alert style={{position: "fixed", top: 0, left: 0, fontFamily: 'iran-sans'}}
                                   variant={"success"}
                                   dismissible show={successShow}>
                                {message}
                            </Alert>
                        </Col>
                    </Row>
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
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نوع حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    value={typeValue}
                                                    onChange={manageTypeSelectChange}>
                                                    <option selected={true}>
                                                        {""}
                                                    </option>
                                                    <option>
                                                        {"هیچکدام"}
                                                    </option>
                                                    {
                                                        accountType === undefined ? <Loader/> : accountType.map(
                                                            item =>
                                                                <option
                                                                    value={item.accountTypeId}>
                                                                    {item.accountTypeName}
                                                                </option>
                                                        )
                                                    }
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"ماهیت حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    value={instinct}
                                                    onChange={manageInstictSelectChange}>
                                                    <option selected={true}>
                                                        {""}
                                                    </option>
                                                    <option value={0}>
                                                        {"بدون ماهیت"}
                                                    </option>
                                                    <option value={1}>
                                                        {"بدهکار"}
                                                    </option>
                                                    <option value={2}>
                                                        {"بستانکار"}
                                                    </option>
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نوع حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    value={always}
                                                    onChange={manageAlwaysSelectChange}>
                                                    <option selected={true}>
                                                        {""}
                                                    </option>
                                                    <option value={0}>
                                                        {"موقت"}
                                                    </option>
                                                    <option value={1}>
                                                        {"دائم"}
                                                    </option>
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
                                                <Form.Check
                                                    name={"delete"}
                                                    label={"بله"}
                                                    onChange={manageCanDeleteSelectChange}
                                                />
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
                                                <Col className={"d-flex align-items-center"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نوع حساب فعلی:"}</label>
                                                    <input value={typeName === undefined? "" : typeName.name} className={"bg-body"} disabled/>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"ماهیت حساب فعلی:"}</label>
                                                    <input value={edit.instinct === 0 ? "ماهیت ندارد" : edit.instinct === 1 ? "بدهکار" :"بستانکار"} className={"bg-body"} disabled/>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"وضعیت حساب فعلی:"}</label>
                                                    <input value={edit.always === 0 ? "موقت" :"دائم"} className={"bg-body"} disabled/>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-3"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نوع حساب:"}</label>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <Form.Select
                                                        value={typeValue.id}
                                                        onChange={manageTypeSelectChange}>
                                                        <option selected={true}>
                                                            {""}
                                                        </option>
                                                        <option>
                                                            {"هیچکدام"}
                                                        </option>
                                                        {
                                                            accountType === undefined ? <Loader/> : accountType.map(
                                                                item =>
                                                                    <option
                                                                        value={item.accountTypeId}>
                                                                        {item.accountTypeName}
                                                                    </option>
                                                            )
                                                        }
                                                    </Form.Select>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-3"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"ماهیت حساب:"}</label>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <Form.Select
                                                        value={instinct}
                                                        onChange={manageInstictSelectChange}>
                                                        <option selected={true}>
                                                            {""}
                                                        </option>
                                                        <option value={0}>
                                                            {"بدون ماهیت"}
                                                        </option>
                                                        <option value={1}>
                                                            {"بدهکار"}
                                                        </option>
                                                        <option value={2}>
                                                            {"بستانکار"}
                                                        </option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-3"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نوع حساب:"}</label>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <Form.Select
                                                        value={always}
                                                        onChange={manageAlwaysSelectChange}>
                                                        <option selected={true}>
                                                            {""}
                                                        </option>
                                                        <option value={0}>
                                                            {"موقت"}
                                                        </option>
                                                        <option value={1}>
                                                            {"دائم"}
                                                        </option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>

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

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"امکان حذف:"}</label>
                                                    {
                                                        edit.delete === 0 ?
                                                            <>
                                                                <Form.Check
                                                                    name={"delete"}
                                                                    type={"radio"}
                                                                    checked={true}
                                                                    label={"بله"}
                                                                    onChange={manageEditeCanDelete}
                                                                />
                                                                <Form.Check
                                                                    value={1}
                                                                    type={"radio"}
                                                                    name={"delete"}
                                                                    label={"خیر"}
                                                                    onChange={(e)=>manageEditeCanDelete(e)}
                                                                />
                                                        </> : <Form.Check
                                                            name={"delete"}
                                                            label={"بله"}
                                                            onChange={manageCanDeleteSelectChange}
                                                        />
                                                    }
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
                                        {
                                            AccountDefaultPerson.map(item => (
                                                <td key={`account-default-td-${item.id}`} className={"p-2"}>
                                                    {item.name}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account.map(item => (
                                            <tr key={`default-table-body-${item.defaultPersonId}`}>
                                                <td className={"p-2"}>{item.defaultPersonCode}</td>
                                                <td className={"p-2"}>{item.defaultPersonName}</td>
                                                <td className={"p-2"}>
                                                    {item.instinct === 0 ? "ماهیت ندارد" : item.instinct === 1 ? "بدهکار" :"بستانکار"}
                                                    /
                                                    {item.type === 0 ? "موقت" : "دائم"}
                                                </td>
                                                <td className={"p-2"}><Button
                                                    onClick={() => manageDefaultPersonsLink(item.defaultPersonId)}
                                                    variant={"warning"}>{"مشاهده"}</Button>
                                                </td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}
                                                                       onClick={() => manageEditAccount(item.defaultPersonId , item.accountTypeId)}/>

                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-danger"}
                                                                       tooltip={"حذف حساب"}
                                                                       icon={faTrash}
                                                                       onClick={() => manageDeleteModal(item.defaultPersonId)}/>
                                                </td>
                                            </tr>
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


export default AccountingDefaultPerson;