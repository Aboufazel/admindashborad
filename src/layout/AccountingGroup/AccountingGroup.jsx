import {Alert, Breadcrumb, Button, Col, Container, Modal, Row} from "react-bootstrap";
import FilterBox from "../../components/FilterBox/FilterBox";
import {AddAccountGroup, DeleteAccountGroup, EditIsActive, GetAllAccountGroup} from "../../api/AccountGroup";
import '../../components/CustomTable/table.style.css'
import {useEffect, useState} from "react";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {BeatLoader} from "react-spinners";
import {useNavigate} from "react-router-dom";



const AccountingGroup = () => {
    const [account , setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const [value, setValue] = useState({code: "" , name:""});
    const [show, setShow] = useState(false);
    const [messageShow , setMessageShow] = useState(false);
    const navigate = useNavigate();



    const handleClose = () => {
        setShow(false);
        emptyInput()
    };
    const handleShow = () => setShow(true);

    const manageChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value});
        console.log(value)
    }

    const AccountGroupGetTabel= async () => {
        const data = await GetAllAccountGroup().catch(() => setError(true));
        console.log(data)
        if(data.data.isSuccess === false){
            localStorage.clear();
            navigate('/login')
        }
        setAccount(data.data.accountGroups)
    };

    useEffect(() => {
        AccountGroupGetTabel();
    }, []);


    const manageAddAccount = async ()=>{
        const addResponse = await AddAccountGroup (value.code , value.name);
        if(addResponse.data.isSuccess === true){
            alert(`${addResponse.data.message}`)
            setShow(false);
            setMessageShow(true)
            emptyInput();
            setTimeout(()=>{
            } , 1000)
        }else {
            alert(`${addResponse.data.message}`)
        }

    }


    const manageRemoveAccount = async (id)=>{
        const removeResponse = await DeleteAccountGroup(id);
        if (removeResponse.data===false){
            alert("حذف موفق نبود")
        }else{
            alert("حذف با موفقیت انجام شد")
        }
    }

    const manageActive = async (id , active)=>{
        const activeResponse = await EditIsActive (id , active);
        console.log(activeResponse)
    }

    const emptyInput = () => {
        setValue({code: "" , name:""});
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                            {'داشبورد'}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {'مقالات'}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={'main_block'}>
                <Col>
                    <Row>
                        <Col>
                            <p>
                                {'مقالات'}
                            </p>
                        </Col>
                    </Row>
                    <Row className={"d-flex my-3 mb-5"}>
                        <Col>
                            <>
                                <Button className={'btn_style'}  onClick={handleShow}>
                                    {"افزودن گروه حساب"}
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title className={'modal_title'}>
                                            {"افزودن حساب"}
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label style={{fontFamily:'iran-sans'}} className={"me-2"}>{"کد گروه:"}</label>
                                                <input name={"code"} onChange={manageChange} value={value.code} className={'p-2'}/>
                                            </Col>
                                        </Row>
                                        <Row className={"my-3"}>
                                            <Col className={"d-flex align-items-center col-12"}>
                                                <label  style={{fontFamily:'iran-sans'}}  className={"me-2"}>{"نام گروه:"}</label>
                                                <input name={"name"} onChange={manageChange} value={value.name} className={'p-2'}/>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className={'close_btn'} onClick={handleClose}>
                                            {"بستن"}
                                        </Button>
                                        <Button onClick={()=>manageAddAccount()} className={'save_btn'}>
                                            {"ایجاد گروه"}
                                        </Button>
                                    </Modal.Footer>
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
                        <Row  style={{height: '80vh'}} className={"overflow-scroll d-flex w-100"}>
                            {account === undefined ?
                                <div className={"d-flex w-100 justify-content-center"}><BeatLoader color="#3c8dbc"/>
                                </div> :
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
                                            {"وضعیت حساب"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"حساب های کل"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"زبان"}
                                        </td>
                                        <td className={"p-2"}>
                                            {"عملیات"}
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        account.map(item => (
                                            <tr key={item.accountGroupId}>
                                                <td className={"p-2"}>{item.accountGroupCode}</td>
                                                <td className={"p-2"}>{item.accountGroupName}</td>
                                                <td className={"p-2"}>{item.isActive === true ? <Button
                                                    onClick={() => manageActive(item.accountGroupId, !item.isActive)}
                                                    variant={"success"} value={true}>{"فعال"}</Button> : <Button
                                                    onClick={() => manageActive(item.accountGroupId, !item.isActive)}
                                                    variant={"danger"} value={false}>{"غیر فعال"}</Button>}</td>
                                                <td className={"p-2"}><Button variant={"warning"}>{"مشاهده"}</Button>
                                                </td>
                                                <td className={"p-2"}>{item.lang === "fa" ? "فارسی" : "انگلیسی"}</td>
                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-warning"}
                                                                       tooltip={"ویرایش"}
                                                                       icon={faEdit}/>
                                                    <ActionTableButton color={"--text-color-white"}
                                                                       bgColor={"--color-danger"}
                                                                       tooltip={"حذف کاربر"}
                                                                       icon={faTrash}
                                                                       onClick={() => manageRemoveAccount(item.accountGroupId)}/>
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

export default AccountingGroup;