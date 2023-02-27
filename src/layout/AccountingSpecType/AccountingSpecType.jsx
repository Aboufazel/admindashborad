import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';

import Loader from "../../Loader/Loader";
import FilterBox from "../../components/FilterBox/FilterBox";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect, useState} from "react";
import {GiveIdContext} from "../../Context/GiveId";
import {
    AddAccountSpecType,
    editSpecTypeIsActive,
    GetTypeSpecById,
    removeAccountSpecType
} from "../../api/AccountSpecType";
import {GetAllAccountGroup} from "../../api/AccountGroup";
import {GetAccountMainByGroupId} from "../../api/AccountMain";
import {AccountSpecGetByMainId} from "../../api/AccountSpec";

const AccountingSpecType = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [groupValue, setGroupValue] = useState({id: ""});
    const [mainValue, setMainValue] = useState({id: ""});
    const [specValue, setSpecValue] = useState({id: ""});
    const [mainReload, setMainReload] = useState(false);
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
    const [accountGroup, setAccountGroup] = useState(undefined);
    const [accountMain, setAccountMain] = useState(undefined);
    const [accountSpec, setAccountSpec] = useState(undefined);
    const [waiting, setWaiting] = useState(false);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const TypeId = useContext(GiveIdContext);

    const AccountTypeSpecGetTable = async () => {
        const data = await GetTypeSpecById(TypeId.authData).catch(() => setError(true));
        console.log(data.data.accountTypeSpecs)
        setAccount(data.data.accountTypeSpecs);
        console.log(account)
    };


    const manageSpecTypeActive = async (id, active) => {
        setMessage("این قابلیت فعال نیست");
        setErrorShow(true);
        setTimeout(()=>{
            setMessage("");
            setErrorShow(false);
        } , 1000)
    }

    const GetGroupAccount = async () => {
        const accountGroupData = await GetAllAccountGroup().catch(() => setError(true));
        if (accountGroupData.status === 200) {
            setDataLoading(false);
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
    }


    const manageGroupSelectChange = (e) => {
        setGroupValue({id: e.target.value});
        setMainReload(!mainReload);
    }

    const manageMainSelectChange = (e) => {
        setMainValue({id: e.target.value});
        setSpecReload(!specReload);
    }

    const manageSpecSelectChange = (e) => {
        setSpecValue({id: e.target.value});
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


    const ManageAddSpecType = async (specId, typeId) => {
        setDataLoading(true);
        const sendSaveData = await AddAccountSpecType(specId, typeId).catch(() => setError(true));
        if (sendSaveData.data.isSuccess === true) {
            setMessage(sendSaveData.data.message);
            setShow(false);
            setSuccessShow(true);
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(sendSaveData.data.message);
            setShow(false);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }
    };


    const manageEdit = (id) => {
        console.log(id)
    }


    const manageRemoveSpecAccount = async (id) => {
        setWaiting(true);
        setDeleteModalShow(false);
        const removeResponse = await removeAccountSpecType(id).catch();
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

    useEffect(() => {
        AccountTypeSpecGetTable();
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
        setDeleteModalShow(false);
    };

    const manageDeleteModal = (id) => {
        setDeleteModalShow(true);
        setDeleteModal(id);
    }

    const handleShow = () => setShow(true);

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
                            <Link to={'/accountType'}>
                                {'نوع حساب'}
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
                                    {"افزودن حساب معین"}
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
                                                    mainSelectShow === false ?
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
                                                    specSelectShow === false ?
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
                                        <Button onClick={() => ManageAddSpecType(specValue.id, TypeId.authData)}
                                                className={'save_btn'}>
                                            {"ذخیره"}
                                        </Button>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal style={{fontFamily: 'iran-sans'}} show={deleteModalShow} onHide={handleClose}>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        {"آیا از حذف حساب اطمینان دارید؟"}
                                        <Row className={"d-flex flex-row justify-content-center"}>
                                            <Col
                                                className={"d-flex flex-row-reverse gap-3 mt-3 flex-row justify-content-center col-12"}>
                                                <Button className={'save_btn'} onClick={handleClose}>
                                                    {"انصراف"}
                                                </Button>
                                                <Button className={'close_btn'}
                                                        onClick={() => manageRemoveSpecAccount(deleteModal)}>
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
                            {
                                waiting === true ? <Loader/> :
                                    account === undefined ?
                                        <div className={"d-flex w-100 justify-content-center"}><Loader/></div> :
                                        <table className={"table_block"}>
                                            <thead>
                                            <tr>
                                                <td className={"p-2"}>
                                                    {"نام"}
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
                                                account === undefined ?
                                                    <div className={"w-100 d-flex justify-content-center mt-3"}>
                                                        {"حساب معین مربوطه یافت نشد!"}
                                                    </div>
                                                    :

                                                    account.map(
                                                        item => <tr key={item.accountTypeSpecId}>
                                                            <td className={"p-2"}>{item.accountSpecName}</td>
                                                            <td className={"p-2"}>{item.isActive === true ? <Button
                                                                variant={"success"}
                                                                value={true}
                                                                onClick={() => manageSpecTypeActive(item.accountTypeSpecId, item.isActive)}
                                                            >{"فعال"}</Button> : <Button
                                                                variant={"secondary"}
                                                                value={false}
                                                                onClick={() => manageSpecTypeActive(item.accountTypeSpecId, item.isActive)}
                                                            >{"غیر فعال"}</Button>}</td>
                                                            <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                                <ActionTableButton color={"--text-color-white"}
                                                                                   bgColor={"--color-warning"}
                                                                                   tooltip={"ویرایش"}
                                                                                   icon={faEdit}
                                                                                   onClick={() => manageEdit(item.accountTypeSpecId)}
                                                                />

                                                                <ActionTableButton color={"--text-color-white"}
                                                                                   bgColor={"--color-danger"}
                                                                                   tooltip={"حذف حساب"}
                                                                                   icon={faTrash}
                                                                                   onClick={() => manageDeleteModal(item.accountTypeSpecId)}
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


export default AccountingSpecType;