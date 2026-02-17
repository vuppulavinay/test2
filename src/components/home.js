import React, { useState, useReducer } from "react";
import Form1 from "./form1";

const Home = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "developer",
        acceptTerms: false
    })
    const [error, setError] = useState({
        fullName: "",
        email: "",
        role: "",
        acceptTerms: false
    })

    const [isNxtDisabled, setIsNxtDisabled] = useState(true);

    const handleFormData = (name, value) => {
        setError((prev) => {
            return { ...prev, [name]: "" }
        })
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })

    }

    const onBlurHandler = () => {
        let isValid = true;
        isValid = Object.keys(formData).every((e) => {
            if (e === "acceptTerms") {
                return formData[e] === true
            } else {
                return formData[e] !== ""
            }
        });
        setDisableSubmitBtn(!isValid)
        console.log(isValid, 'isValid')
        if (formData.fullName && formData.email) {
            setIsNxtDisabled(false);
        } else {
            setError((prev) => {
                return { ...prev, fullName: !formData.fullName ? "fullName is required" : "", email: !formData.email ? "email is required" : "" }
            })
        }
    }


    const handleSubmit = (e) => {
       e.preventDefault();
alert(`Summary:fullName:${formData.fullName} email:${formData.email} role:${formData.role} AcceptTerms:${formData.acceptTerms} `)
     
        // console.log(isValid,'isValid')

    }

    return (

        <div>
            <h1>Registration</h1>
            <Form1 formInfo={formData} setFormData={setFormData} isNxtDis={isNxtDisabled} setIsNxt={setIsNxtDisabled} handleFormData={handleFormData} onBlurFn={onBlurHandler} currentStep={currentStep} setCurrentStep={setCurrentStep} error={error} handleSubmit={handleSubmit} disableSubmitBtn={disableSubmitBtn} />

        </div>

    )
}

export default Home;