import {GetAllAccountGroup} from "../../api/AccountGroup";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {BeatLoader} from "react-spinners";


const FirstLayoutAccountMain = () => {
    const [account, setAccount] = useState(undefined);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const AccountGroupGetTabel = async () => {
        const data = await GetAllAccountGroup().catch(() => setError(true));
        if (data.data.isSuccess === false) {
            localStorage.clear();
            alert("نیاز به ورود مجدد دارید");
            navigate('/login')
        }
        console.log(data.data.accountGroups)
        setAccount(data.data.accountGroups);
    };


    useEffect(()=>{
        AccountGroupGetTabel();
    } , [])
    return (
        <Container>
            <Row>
                <Col>
                    {account === undefined ? <div className={"d-flex w-100 justify-content-center"}><BeatLoader color="#3c8dbc"/>
                    </div>   : account.map((item)=>(
                        <div key={item.accountGroupId} className={"GroupCategory"}>
                            <Link to={"/"}>
                                <h4>{item.accountGroupName}</h4>
                            </Link>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )

}


export default FirstLayoutAccountMain;