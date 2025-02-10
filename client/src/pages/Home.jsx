import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const UserAuth = async () => {
        const token = localStorage.getItem("token");
        console.log(token)
        if (token) {
            let api = "https://jwt-mern-hkyo.onrender.com/loginJWT/userauth";
            const tokenres = await axios.post(api, null, { headers: { "auth-token": token } });
            localStorage.setItem("username", tokenres.data.username);
            localStorage.setItem("useremail", tokenres.data.useremail);
            navigate("/dashboard");
        }
    }
    useEffect(() => {
        UserAuth();
    }, [])
    return (
        <>
            <h4>Welcome to My JWT Mern Sysrem</h4>
        </>
    )
}
export default Home;