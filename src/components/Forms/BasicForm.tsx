import "../../pages/pages.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';

function RepairRequestForm () {
    return(
        <div className="row justify-content-md-center formText">
                <div className="col-7 formTitle">
                    <h2>Repair Request</h2>
                </div>
                <div className="col-7 centerV">
                    <Form>
                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicContactName">Contact Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact Name" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicCompanyName">Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Company Name" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicEmail">Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" required></Form.Control>
                            <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicPhone">Phone</Form.Label>
                            <Form.Control type="phone" placeholder="Phone" required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="mb-3 " controlid="formBasicRequestedService">Requested Service</Form.Label> 
                            <Form.Control as="select" type="select" required>                  
                                <option value="">Select One</option>
                                <option value="NewDesign">New Design</option>
                                <option value="EngineeringSupport">Engineering Support</option>
                                <option value="Rebuild/Repair">Rebuild/Repair</option>
                                <option value="Build Existing Design">Build Existing Design</option>
                                <option value="Other">Other</option>
                            </Form.Control> 
                        </Form.Group>                          

                        <Form.Group>
                            <Form.Label className="mb-3">Please provide any details, or drawings regarding your project for our engineering team</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group>    
                            <Form.Label className="mb-3 " controlid="formBasicRequestedService">Is your project time sensitive?  If so, what is the required deadline?</Form.Label>
                            <InputGroup>                        
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                <Form.Control aria-label="Text input with checkbox" />
                            </InputGroup>
                        </Form.Group>
                        <br/>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
    );
}


export default RepairRequestForm;