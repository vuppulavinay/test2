import React from "react";
import { useNavigate } from "react-router-dom";

const Form1 = ({ formInfo, setFormData, isNxtDis, setIsNxt, handleFormData, onBlurFn, currentStep, setCurrentStep, error,handleSubmit,disableSubmitBtn }) => {


    // const navigate = useNavigate();
    const handleNavStep2 = (e) => {
        sessionStorage.setItem("formData", JSON.stringify(formInfo));
        setCurrentStep(2);
        e.preventDefault();
    }

    const handleNavStep1 = (e) => {
        sessionStorage.setItem("formData", JSON.stringify(formInfo));
        setCurrentStep(1);
        e.preventDefault();
    }

    console.log(formInfo, 'formdata', currentStep)


    return (
        <div>
            <form>
                {
                    currentStep === 2 ?

                        <div>
                            <div>
                                <div>Role</div>
                                <select name='role' value={formInfo.role} onChange={(e) => handleFormData("role", e.target.value)} onBlur={onBlurFn}>

                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="managaer">Manager</option>
                                </select>
                            </div>

                            <div>
                                <input type="checkbox" name="acceptTerms" checked={formInfo.acceptTerms === true ? true : false} onChange={(e) => handleFormData("acceptTerms", e.target.checked)} onBlur={onBlurFn} />Accept Terms and Conditions
                            </div>
                            <button onClick={(e) => handleNavStep1(e)}>back</button>
                            <button disabled={disableSubmitBtn} onClick={handleSubmit}>Submit</button>
                        </div>

                        :
                        <div>
                            <div>
                                <label>Full Name</label>
                                <input type="text" name="fullName" value={formInfo.fullName} onChange={(e) => handleFormData("fullName", e.target.value)} onBlur={onBlurFn} />
                               {error.fullName &&  <div style={{color:"red"}}> This Field is required</div>}
                            </div>
                            <div>
                                <label>email</label>
                                <input type="text" name="email" value={formInfo.email} onChange={(e) => handleFormData("email", e.target.value)} onBlur={onBlurFn} />
                                  {error.fullName &&  <div style={{color:"red"}}> This Field is required</div>}
                            </div>

                            <button disabled={isNxtDis} onClick={(e) => handleNavStep2(e)}>next</button>
                            {/* <button onClick={(e) => handleNavStep2(e)}>next</button> */}
                        </div>

                }


            </form>
        </div>
    )
}
export default Form1;