import React from "react";
import { useNavigate,useLocation,useParams } from "react-router-dom";

const Form2 = () => {
    const location= useLocation();
    const params=useParams();
    console.log(params, "iii",location.state);
    const navigate = useNavigate();
    const handleNavStep1 = () => {
        navigate("/form1");
    }

    return (
        <div>
            step2
          
        </div>
    )
}
export default Form2;