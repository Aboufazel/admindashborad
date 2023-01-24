import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import {useContext, useEffect, useState} from "react";
import {GiveIdContext} from "../../Context/GiveId";
import {
    AccountSpecGetById,
    AddAccountSpec,
    EditAccountSpec,
    GetAllAccountSpec,
    SpecEditIsActive
} from "../../api/AccountSpec";
import {useNavigate} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


const AccountTotal = () => {
    const [account, setAccount] = useState(undefined);
    const {state , dispatch} = useContext(GiveIdContext)
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "", name: ""});
    const [edit, setEdit] = useState({id: "", code: "", name: "", active: ""});
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [errorShow, setErrorShow] = useState(false);
    const [successShow, setSuccessShow] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [reload , setReload] = useState(false)
    const MainId = useContext(GiveIdContext);
    const navigate = useNavigate();


    const handleClose = () => {
        setShow(false);
        // emptyInput()
    };
    const handleShow = () => setShow(true);


    const AccountSpecGetTabel = async () => {
        const data = await GetAllAccountSpec().catch(() => setError(true));
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        setAccount(data.data.accountSpecs)
    };


    const manageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    const manageAddAccount = async () => {
        const addResponse = await AddAccountSpec(value.code, value.name, MainId.authData);
        if (addResponse.data.isSuccess === true) {
            setMessage(addResponse.data.message);
            setShow(false);
            setSuccessShow(true);
            emptyInput();
            setReload(!reload);
            setTimeout(() => {
                setSuccessShow(false)
            }, 2500)
        } else {
            setMessage(addResponse.data.message);
            setShow(false);
            setErrorShow(true);
            setTimeout(() => {
                setErrorShow(false)
            }, 2500)
        }

    }

    useEffect(() => {
        AccountSpecGetTabel();
        manageMainCode();
    }, [reload])


    const emptyInput = () => {
        setValue({code: "", name: ""});
    }



    const manageEditAccount = async (id) => {
        setEditShow(true);
        setLoading(true)
        const getResponse = await AccountSpecGetById(id);
        getResponse.data.accountSpecs.map(item => setEdit({
            id: item.accountSpecId,
            code: item.accountSpecCode, name: item.accountSpecName, active: item.isActive
        }))
        if (getResponse.status === 200) {
            setLoading(false)
        } else {
            setEditShow(false)
        }
    }

    const handleEditClose = () => {
        setEditShow(false);
        emptyInput()
    };

    const manageEditChange = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});
    }

    const manageSendEditAccount = async () => {
        const sendEditResponse = await EditAccountSpec(edit.id,MainId.authData,edit.code, edit.name);
        if (sendEditResponse.data.isSuccess === true) {
            setSuccessShow(true);
            setEditShow(false);
            setReload(!reload)
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


    const manageMainCode = ()=>{
        if(MainId.authData === undefined){
            navigate("/accountingGroup");
        }
    }

    const manageActive = async (id, active) => {
        const activeResponse = await SpecEditIsActive(id, active)
            .catch(()=>{
                setMessage(activeResponse.data.message);
                setErrorShow(true);
                setTimeout(()=>{
                    setErrorShow(false)
                }, 2500)
            })
        setReload(!reload);
    }


    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                            {'داشبورد'}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href={'/accountingMain'} className={'beard_crumb'}>
                            {'حساب کل'}
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

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب معین"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"کد حساب:"}</label>
                                                <input name={"code"} onChange={manageChange} value={value.code}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily: 'iran-sans'}}
                                                       className={"me-2"}>{"نام حساب:"}</label>
                                                <input name={"name"} onChange={manageChange} value={value.name}
                                                       className={'p-2'}/>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button onClick={()=>manageAddAccount()} className={'save_btn'}>
                                            {"ایجاد حساب معین"}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={editShow} onHide={handleEditClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"ویرایش حساب"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    {loading === true ?
                                        <div className={"d-flex w-100 justify-content-center"}><BeatLoader
                                            color="#3c8dbc"/>
                                        </div> :
                                        <Modal.Body
                                            class={'d-flex flex-column justify-content-start p-3'}>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"کد گروه:"}</label>
                                                    <input name={"code"} onChange={manageEditChange}
                                                           value={edit.code} className={'p-2'}/>
                                                </Col>
                                            </Row>
                                            <Row className={"my-3"}>
                                                <Col className={"d-flex align-items-center col-12"}>
                                                    <label style={{fontFamily: 'iran-sans'}}
                                                           className={"me-2"}>{"نام گروه:"}</label>
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
                                            {"ویرایش گروه"}
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
                                        account.filter(item => item.accountMainId === MainId.authData).map(
                                            item => <tr key={item.accountSpecId}>
                                                <td className={"p-2"}>{item.accountSpecCode}</td>
                                                <td className={"p-2"}>{item.accountSpecName}</td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    variant={"success"}
                                                    value={true}
                                                    onClick={() => manageActive(item.accountSpecId , !item.isActive)}
                                                >{"فعال"}</Button> : <Button
                                                    variant={"secondary"}
                                                    value={false}
                                                    onClick={() => manageActive(item.accountSpecId , !item.isActive)}
                                                >{"غیر فعال"}</Button>}</td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}
                                                                       onClick={()=> manageEditAccount(item.accountSpecCode)}
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

export default AccountTotal;