import accountPersonLink, {
    AddPersonLink, EditPersonLink,
    GetByPersonId, removePersonLinkId
} from "../../api/AccountPersonLink";
import {useContext, useEffect, useState} from "react";
import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Loader from "../../Loader/Loader";
import Form from "react-bootstrap/Form";
import FilterBox from "../../components/FilterBox/FilterBox";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {AccountSpecGetByMainId, GetAllAccountSpec} from "../../api/AccountSpec";
import {GiveIdContext} from "../../Context/GiveId";
import {GetAllAccountGroup} from "../../api/AccountGroup";
import {GetAccountMainByGroupId} from "../../api/AccountMain";

const AccoutingPersonLink = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [specValue, setSpecValue] = useState({id: ""});
    const [specReload, setSpecReload] = useState(false);
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [personLinkId , setPersonLinkId] = useState(undefined);
    const [personId , setPersonId] = useState(undefined);
    const [specId , setSpecId] = useState(undefined);
    const [specName , setSpecName] = useState("")
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [specSelectShow, setSpecSelectShow,] = useState(false);
    const [reload, setReload] = useState(false);
    const [accountSpec, setAccountSpec] = useState(undefined);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [groupValue, setGroupValue] = useState({id: ""});
    const [mainReload, setMainReload] = useState(false);
    const [mainValue, setMainValue] = useState({id: ""});
    const [accountGroup, setAccountGroup] = useState(undefined);
    const [accountMain, setAccountMain] = useState(undefined);
    const [mainSelectShow, setMainSelectShow,] = useState(false);
    const [groupName , setGroupName] = useState(null);
    const [mainName , setMainName] = useState(null);



    const TypeId = useContext(GiveIdContext);


    const manageTableData = async () => {
        const tableData = await GetByPersonId(TypeId.authData).catch(() => alert('error'));
        console.log(tableData)
        setAccount(tableData.data.defaultPersonLinks)
    }



    const manageSpecSelectChange = (e) => {
        setSpecValue({id: e.target.value});
        setSpecReload(!specReload);
    }


    const GetGroupAccount = async () => {
        setDataLoading(true);
        const accountGroupData = await GetAllAccountGroup().catch(() => setError(true));
        if (accountGroupData.status === 200) {
            setDataLoading(false);
            accountMain !== undefined ? setAccountMain(undefined) : setDataLoading(false)
            accountSpec !== undefined ? setAccountMain(undefined) : setDataLoading(false)
        }
        setAccountGroup(accountGroupData.data.accountGroups);
    }


    const GetMainAccount = async (id) => {
        setDataLoading(true);
        const accountMainData = await GetAccountMainByGroupId(id).catch(() => setError(true));
        if (accountMainData.status === 200) {
            setDataLoading(false);
            setMainSelectShow(true);
        }
        setAccountMain(accountMainData.data.accountMains);
        setTimeout(() =>{
            setDataLoading(false)
        } , 2500)
    }

    const manageGroupSelectChange = (e) => {
        setGroupValue({id: e.target.value});
        setMainReload(!mainReload);
    }


    const manageMainSelectChange = (e) => {
        setMainValue({id: e.target.value});
        setSpecReload(!specReload);
    }

    const GetSpecAccount = async (id) => {
        setDataLoading(true);
        const accountSpecData = await AccountSpecGetByMainId(id).catch(() => setError(true));
        if (accountSpecData.status === 200) {
            setDataLoading(false);
            setSpecSelectShow(true);
        }
        setAccountSpec(accountSpecData.data.accountSpecs);
    }


    const AddDefaultPersonLink = async (personId, specId) => {
        setDataLoading(true);
        const addResponse = await AddPersonLink(personId, specId).catch(() => setError(true));
        if (addResponse.data.isSuccess === true) {
            setMessage(addResponse.data.message);
            setShow(false);
            setSpecReload(!specReload)
            setAccountSpec(undefined);
            setWaiting(false);
            setSuccessShow(true);
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(addResponse.data.message);
            setSpecReload(!specReload)
            setShow(false);
            setAccountSpec(undefined);
            setWaiting(false);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }
    };


    const manageEdit = (id ,groupName , mainName, name ,  specId) => {
        setEditShow(true);
        setPersonLinkId(id);
        setGroupName(groupName);
        setMainName(mainName);
        setSpecName(name);
        setSpecId(specId)
        setWaiting(false);
        setLoading(false)
    }


    useEffect(() => {
        manageTableData();
    }, [reload])


    useEffect(() => {
        GetGroupAccount();
    }, [reload])


    useEffect(() => {
        GetMainAccount(groupValue.id);
    }, [mainReload, reload])


    useEffect(() => {
        GetSpecAccount(mainValue.id);
    }, [specReload, reload])


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);


    useEffect(() => {
        manageTableData();
    }, [reload])

    const handleEditClose = () => {
        setEditShow(false);
    };

    const manageSendEditAccount = async (personLinkId) => {
        setWaiting(true)
        const sendEditResponse = await EditPersonLink(personLinkId , TypeId.authData, specValue.id).catch()
        if (sendEditResponse.data.isSuccess === true) {
            setReload(!reload)
            setWaiting(false)
            setSuccessShow(true);
            setEditShow(false);
            setMessage(sendEditResponse.data.message);
            setTimeout(() => {
                setSuccessShow(false);
            }, 2500)
        } else {
            setMessage(sendEditResponse.data.message);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false);
            }, 2500)
        }
    }


    const handleDeleteClose = ()=>{
        setDeleteModalShow(false);
    }

    const manageDeleteModal = (id)=>{
        setDeleteModalShow(true);
        setDeleteModal(id);
    }

    const manageRemoveAccount = async (id) => {
        setWaiting(true);
        setDeleteModalShow(false);
        const removeResponse = await removePersonLinkId(id).catch()
        if (removeResponse.data.isSuccess === false) {
            setMessage(removeResponse.data.message);
            setAccountSpec(undefined);
            setSpecReload(!specReload);
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
                                                       className={"me-2"}>{"گروه حساب:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                <Form.Select
                                                    defaultValue={groupValue.id}
                                                    onChange={manageGroupSelectChange}>
                                                    <option selected={true}>
                                                        {"گروه حساب"}
                                                    </option>
                                                    {
                                                        accountGroup === undefined ? <Loader/> : accountGroup.map(
                                                            item =>

                                                                <option
                                                                    value={item.accountGroupId}>
                                                                    {item.accountGroupName}
                                                                </option>
                                                        )
                                                    }
                                                </Form.Select>
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"حساب کل:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                {
                                                    dataLoading ? <Loader/> : mainSelectShow === false ?
                                                        <div>
                                                            {"گروه حساب انتخاب نشده است"}
                                                        </div> :
                                                        <Form.Select
                                                            defaultValue={mainValue.id}
                                                            onChange={manageMainSelectChange}>
                                                            <option selected={true}>
                                                                {""}
                                                            </option>
                                                            {
                                                                accountMain === undefined ?
                                                                    <option>
                                                                        {""}
                                                                    </option> : accountMain.map(
                                                                        item => (
                                                                            <option
                                                                                value={item.accountMainId}>
                                                                                {item.accountMainName}
                                                                            </option>
                                                                        )
                                                                    )
                                                            }
                                                        </Form.Select>
                                                }
                                            </Col>
                                        </Row>

                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-3"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"حساب معین:"}</label>
                                            </Col>
                                            <Col className={"d-flex align-items-center col-9"}>
                                                {
                                                    dataLoading ? <Loader/> : specSelectShow === false ?
                                                        <div>
                                                            {"حساب کلی انتخاب نشده است"}
                                                        </div> : <Form.Select
                                                            defaultValue={specValue.id}
                                                            onChange={manageSpecSelectChange}>
                                                            <option selected={true}>
                                                                {""}
                                                            </option>
                                                            {
                                                                accountSpec === undefined ?
                                                                    <option>
                                                                        {""}
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
                                                <Col className={"d-flex align-items-center col-9"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2 w-50"}>{"حساب معین فعلی:"}</label>
                                                    {
                                                      personLinkId === undefined ? <Loader/> :
                                                          <input disabled value={specName === undefined ?"" : specName}/>
                                                    }
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-6"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2 w-50"}>{"گروه حساب فعلی:"}</label>
                                                    <input name={"code"}
                                                           value={groupName === null ? "" : groupName}
                                                           disabled
                                                           className={'p-2 w-50 bg-warning'}/>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-6"}>
                                                    <Form.Select
                                                        defaultValue={groupValue.id}
                                                        onChange={manageGroupSelectChange}>
                                                        <option selected={true}>
                                                            {"گروه حساب جدید"}
                                                        </option>
                                                        {
                                                            accountGroup === undefined ? <Loader/> : accountGroup.map(
                                                                item =>

                                                                    <option
                                                                        value={item.accountGroupId}>
                                                                        {item.accountGroupName}
                                                                    </option>
                                                            )
                                                        }
                                                    </Form.Select>
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-6"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2 w-50 "}>{"حساب کل فعلی:"}</label>
                                                    <input name={"name"}
                                                           disabled
                                                           value={mainName}
                                                           className={'p-2 w-50 bg-warning'}/>
                                                </Col>
                                                <Col className={"d-flex align-items-center col-6"}>
                                                    {
                                                        dataLoading ? <Loader/> : mainSelectShow === false ?
                                                            <div>
                                                                {"گروه حساب انتخاب نشده است"}
                                                            </div> :
                                                            <Form.Select
                                                                defaultValue={mainValue.id}
                                                                onChange={manageMainSelectChange}>
                                                                <option selected={true}>
                                                                    {""}
                                                                </option>
                                                                {
                                                                    accountMain === undefined ?
                                                                        <option>
                                                                            {""}
                                                                        </option> : accountMain.map(
                                                                            item => (
                                                                                <option
                                                                                    value={item.accountMainId}>
                                                                                    {item.accountMainName}
                                                                                </option>
                                                                            )
                                                                        )
                                                                }
                                                            </Form.Select>
                                                    }
                                                </Col>
                                            </Row>

                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <Col className={"d-flex align-items-center w-100"}>
                                                        <label style={{fontFamily: 'iran-sans'}}
                                                               className={"me-2 w-50"}>{"حساب معین:"}</label>
                                                        {
                                                            dataLoading ? <Loader/> : specSelectShow === false ?
                                                                <div>
                                                                    {"حساب کلی انتخاب نشده است"}
                                                                </div> : <Form.Select
                                                                    defaultValue={specValue.id}
                                                                    onChange={manageSpecSelectChange}>
                                                                    <option selected={true}>
                                                                        {""}
                                                                    </option>
                                                                    {
                                                                        accountSpec === undefined ?
                                                                            <option>
                                                                                {""}
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
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                    }
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleEditClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button onClick={() => manageSendEditAccount(personLinkId)} className={'save_btn'}>
                                            {"ویرایش"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal style={{fontFamily: 'iran-sans'}} show={deleteModalShow} onHide={handleClose}>
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
                                                                           onClick={() => manageEdit(item.defaultPersonLinkId ,
                                                                               item.accountGroupName ,
                                                                               item.accountMainName ,
                                                                               item.accountSpecName ,
                                                                               item.defaultPersonId,
                                                                               item.accountSpecId )}
                                                        />

                                                        <ActionTableButton color={"--text-color-white"}
                                                                           bgColor={"--color-danger"}
                                                                           tooltip={"حذف حساب"}
                                                                           icon={faTrash}
                                                                           onClick={() => manageDeleteModal(item.defaultPersonLinkId)}
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