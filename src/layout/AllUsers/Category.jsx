import {Breadcrumb, Col, Button, Container, Row, Modal} from "react-bootstrap";

import '../main.style.css'
import '../../components/CustomTable/table.style.css'
import FilterBox from "../../components/FilterBox/FilterBox";

import {useCallback, useEffect, useState} from "react";
import {deleteUser, EditStatus, GetAllFromUser} from "../../api/Services";
import ActionTableButton from "../../components/ActionTableButton/ActionTableButton";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Loader from "../../Loader/Loader";


const Category = () => {
    const [id, setId] = useState({});
    const [token, setToken] = useState({});
    const [data, setData] = useState(undefined)
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [deleteModal, setDeleteModal] = useState(undefined);
    const [call, setCall] = useState(false)
    const [btn, setBtn] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)


    const manageGetdata = useCallback(() => {
        const data = localStorage.getItem("auth");
        const final = JSON.parse(data);
        setId(final.userId)
        setToken(final.accessToken)
    }, [id])


    const manageActive = async (id, active) => {
        setBtn(true)
        const activeResponse = await EditStatus(id, active === 0 ? 1 : 0).catch(() => {
        });
        setCall(!call)
        setBtn(false)
    }

    const manageUserTable = async () => {
        const apiData = await GetAllFromUser(id, token).catch(() => setError(true));
        if (apiData.data.isSuccess === false) {
            setLoading(true)
            setCall(true)
        } else {
            setData(apiData.data.users)
            console.log(data);
            setCall(false);
            setLoading(false)
        }
    }



    useEffect(()=>{
        manageUserTable().then()
    } , [call])





    const manageDelete = async (userid) => {
        setDeleteModalShow(false);
        const removeData = await deleteUser(userid).catch(()=>{});
        setCall(!call)
    }


    const manageDeleteModal = (id) => {
        setDeleteModalShow(true);
        setDeleteModal(id);
    }



    const handleClose = () => {
        setDeleteModalShow(false);
    };

    const handleDeleteClose = () => {
        setDeleteModalShow(false);
    }



    useEffect(() => {
        manageGetdata();
    }, [id])

    useEffect(() => {
        manageUserTable().then()
    }, [call])


    return (


        <Container>

            <Modal style={{fontFamily: 'iran-sans'}} show={deleteModalShow} onHide={handleClose}>
                <Modal.Body class={'d-flex flex-column justify-content-start p-3'}>
                    {"آیا از حذف حساب اطمینان دارید؟"}
                    <Row className={"d-flex flex-row justify-content-center"}>
                        <Col className={"d-flex flex-row-reverse gap-3 mt-3 flex-row justify-content-center col-12"}>
                            <Button className={'save_btn'} onClick={handleDeleteClose}>
                                {"انصراف"}
                            </Button>
                            <Button className={'close_btn'} onClick={() => manageDelete(deleteModal)}>
                                {"حذف"}
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href={'/'} className={'beard_crumb'}>
                            {'داشبورد'}
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            {'کاربران'}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={'main_block'}>
                <Col>
                    <Row>
                        <Col>
                            <p>
                                {'کاربران'}
                            </p>
                            {
                                btn ? <Loader/> : ""
                            }
                        </Col>
                    </Row>
                    <Row>
                        <FilterBox/>
                    </Row>
                    <Row>
                        <Col dir={'rtl'}>
                            {
                                loading === true ?
                                    <Row className={'d-flex w-100 justify-content-center mt-5'}>
                                        <Col className={"col-12 d-flex justify-content-center"}>
                                            <Loader/>
                                        </Col>
                                    </Row> :
                                    <Row>
                                        <Col className={"d-flex p-5 w-100 col-12"}>
                                            <Row style={{height:"50vh"}} className={"overflow-scroll  d-flex w-100"}>
                                                <table className={"table_block"}>
                                                    <thead>
                                                    <tr>
                                                        <td className={"p-2"}>
                                                            {"نام کاربری"}
                                                        </td>
                                                        <td className={"p-2"}>
                                                            {"شماره موبایل"}
                                                        </td>
                                                        <td className={"p-2"}>
                                                            {"ایمیل"}
                                                        </td>
                                                        <td className={"p-2"}>
                                                            {"وضعیت کاربر"}
                                                        </td>
                                                        <td className={"p-2"}>
                                                            {"نوع کاربر"}
                                                        </td>
                                                        <td className={"p-2"}>
                                                            {"عملیات"}
                                                        </td>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        data.map(item => (
                                                            <tr key={item.userId}>
                                                                <td className={"p-2"}>{item.userName}</td>
                                                                <td className={"p-2"}>{item.mobile}</td>
                                                                <td className={"p-2"}>{item.email}</td>
                                                                <td className={"p-2"}>{item.kind === 4 ? "مدیر" : "کاربر عادی"}</td>
                                                                <td className={"p-2"}>{item.status === 1 ? <Button
                                                                    onClick={() => manageActive(item.userId, item.status)}
                                                                    variant={"success"} value={true}>
                                                                    {
                                                                        "فعال"
                                                                    }
                                                                </Button> : <Button
                                                                    onClick={() => manageActive(item.userId, item.status)}
                                                                    variant={"secondary"} value={false}>
                                                                    {
                                                                        "غیرفعال"
                                                                    }
                                                                </Button>}</td>
                                                                <td className={"d-flex justify-content-center gap-2 p-2"}>
                                                                    <ActionTableButton color={"--text-color-white"}
                                                                                       bgColor={"--color-danger"}
                                                                                       tooltip={"حذف کاربر"}
                                                                                       icon={faTrash}
                                                                                       onClick={() => manageDeleteModal(item.userId)}/>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                    </tbody>
                                                </table>
                                            </Row>
                                        </Col>
                                    </Row>
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default Category;

