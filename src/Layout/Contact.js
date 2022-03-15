import * as React from "react"
import { useState } from "react"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import JRResume from "../Files/JR_Resume.pdf"


const schema = yup.object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    subject: yup.string().required('Field required'),
}).required();

// markup
const About = () => {  
    const { handleSubmit, register, formState: { errors } } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        const service = "service_8642vn9"
        const template = "template_6mgq4r8"
        const user = "user_MpeXEF4f2sFbzavgNIxSS"
        
        

        emailjs.init(user)

        emailjs.send (
            service, 
            template,
            {
                email: data.email,  
                subject: data.subject, 
                message: data.message,
            }    
        ).then(
            function(response) {        
                document.body.style.pointerEvents = "auto"
                FormAlert()
                document.getElementById("contact-form-id").reset()
            },
            function(error) {
                document.body.style.pointerEvents = "auto"
                alert("FAILED!" + error);
            }
        );    
    }

    const delay = (ms) => {
        return new Promise(resolve => {
            setTimeout(() => { resolve() }, ms);
        });
    }

    const FormAlert = async() => {
        setAlert(true)
        await delay(2000)
        setAlert(false)
    }

    const [alert, setAlert ] = useState(false)

    return (
        <section data-pagenum={6}>
            <div className={ alert ? "form-alert alert" :  "form-alert"}>
                <p>Email Sent Sucessfully!</p>
            </div>
            <div className="contact-container">
                <div className="contact-form-container">
                    <form id="contact-form-id" onSubmit={handleSubmit(onSubmit)}>
                        <h2>contact me</h2>
                        <div>                      
                            <input name="email" type="text" placeholder="Email@Email.com" {...register("email")}></input>                        
                            <span className={"error"}><p>{errors.email?.message}</p></span>                                             
                        </div>                   
                        <div>
                            <input name="subject" type="text" placeholder="Subject" {...register("subject")}>
                            </input>
                            <span className={"error"}><p>{errors.subject?.message}</p></span> 
                        </div>                                    
                        <textarea name="message" type="text" placeholder="Message" {...register("message")}></textarea> 
                        <button><p>SEND</p></button>                                 
                    </form>
                </div>
                <a href={JRResume} download={true}><h2>download resume(pdf)</h2></a>
            </div>     
        </section> 
    )
}

export default About