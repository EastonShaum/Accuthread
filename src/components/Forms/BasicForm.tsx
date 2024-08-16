import { useState } from "react";
import emailjs from "@emailjs/browser";

import "../../pages/pages.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';


const sendEmail = (details) => {
    emailjs.init({
        publicKey: import.meta.env.VITE_EMAIL_USER_ID,

        limitRate: {
            // Set the limit rate for the application
            // Allow 1 request per 100s
            throttle: 100000,
        },
    });
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,

            {
                contact_name: details.contact_name,
                company_name: details.company_name,
                email_address: details.email_address,
                phone: details.phone,
                requested_service: details.requested_service,
                details: details.details,
                is_time_sensitive: details.is_time_sensitive,
                deadline_date: details.deadline_date,
            }
        )
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
} 



function RepairRequestForm () {
    const [details, setDetails] = useState({
        contact_name: "",
        company_name: "",
        email_address: "",
        phone: "",
        requested_service: "",
        details: "",
        is_time_sensitive: "",
        deadline_date: "",
    });

    const handleDetailsChange = (update) => {
        const {name , value} = update.target;

        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value,
            };
        });
    };

    const handleSendEmail = () => {
        sendEmail(details);
    }

    return(
        <div id="formDiv" className="row justify-content-md-center formText">
                <div className="col-md-7 formTitle">
                    <h2>Repair Request</h2>
                </div>
                <div className="col-md-7 centerV">
                    <Form>
                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicContactName">Contact Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact Name" onChange={handleDetailsChange} name="contact_name" id="contact_name" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicCompanyName">Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Company Name" onChange={handleDetailsChange} name="company_name" id="company_name" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicEmail">Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" onChange={handleDetailsChange} name="email_address" id="email_address" required></Form.Control>
                            <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicPhone">Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Phone" onChange={handleDetailsChange} name="phone" id="phone" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicRequestedService">Requested Service</Form.Label> 
                            <Form.Control as="select" type="select" onChange={handleDetailsChange} name="requested_service" id="requested_service" required>                  
                                <option value="">Select One</option>
                                <option value="NewDesign">New Design</option>
                                <option value="EngineeringSupport">Engineering Support</option>
                                <option value="Rebuild/Repair">Rebuild/Repair</option>
                                <option value="Build Existing Design">Build Existing Design</option>
                                <option value="Other">Other</option>
                            </Form.Control> 
                        </Form.Group>                          

                        <Form.Group>
                            <Form.Label className="mb-3">Please provide any details regarding your project for our engineering team</Form.Label>
                            <Form.Control as="textarea" onChange={handleDetailsChange} name="details" id="details" rows={3} />
                            {/* <Form.Control type="file" onChange={handleDetailsChange} name="files" id="files" /> */}
                        </Form.Group>

                        <Form.Group>    
                            <Form.Label className="mb-3 " controlid="formBasicRequestedService">Is your project time sensitive?  If so, what is the required deadline?</Form.Label>
                            <InputGroup>                        
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleDetailsChange} name="is_time_sensitive" id="is_time_sensitive" />
                                <Form.Control aria-label="Text input with checkbox" onChange={handleDetailsChange} name="deadline_date" id="deadline_date" />
                            </InputGroup>
                        </Form.Group>
                        <br/>
                        <Button disabled={!details.company_name || !details.contact_name || !details.email_address || !details.phone || !details.requested_service} onClick={handleSendEmail}>Submit</Button>
                    </Form>
                </div>
            </div>
    );
}


export default RepairRequestForm;