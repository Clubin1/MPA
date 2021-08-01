import {Container} from "react-bootstrap";
import React, {useState} from "react";

import {FormGroup, Label, Input} from "reactstrap";

function Apply() {
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "",
        lastName: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        otherPhone: "",
        fax: "",
        email: "",
        website: "",
        specialties: "",
        treatmentOrientation: "",
        insuranceAccepted: "",
        treatmentModality: "",
        assessmentEvaluations: "",
        populationsServed: "",
        languages: ""
    });

    function onChange(e) { // set the key = to the name property equal to the value typed
        const updateItem = (data[e.target.name] = e.target.value);
        // update the state data object
        setData({
            ...data,
            updateItem
        });
    }

    function handleInsurance(e) {
        let insurance = data.insuranceAccepted + " " + e.target.name
        setData({
            ...data,
            insuranceAccepted: insurance
        })
        console.log(data)
    }

    function handleDisorders(e) {
        let specialties = data.specialties + " " + e.target.name
        setData({
            ...data,
            specialties: specialties
        })
        console.log(data)
    }
    function handleAssessments(e) {
        let assessmentEvaluations = data.assessmentEvaluations + " " + e.target.name
        setData({
            ...data,
            assessmentEvaluations: assessmentEvaluations
        })
        console.log(data)
    }
    function handleTreatment(e) {
        let treatmentModality = data.treatmentModality + " " + e.target.name
        setData({
            ...data,
            treatmentModality: treatmentModality
        })
        console.log(data)
    }
    function handlePopulation(e) {
        let populationsServed = data.populationsServed + " " + e.target.name
        setData({
            ...data,
            populationsServed: populationsServed
        })
        console.log(data)
    }
    function handleLanguages(e) {
        let languages = data.languages + " " + e.target.name
        setData({
            ...data,
            languages: languages
        })
        console.log(data)
    }
    function treatmentOrientation(e) {
        let treatmentOrientation = data.treatmentOrientation + " " + e.target.name
        setData({
            ...data,
            treatmentOrientation: treatmentOrientation
        })
        console.log(data)
    }
    async function submitApplication(event) {                   
        alert(data.name + ", thank you for your appliaction. We will get back to you shortly. Please submit your payment if required.");
        const response = await fetch("https://blooming-forest-09372.herokuapp.com/psychologists", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name: data.name,
                    lastName: data.lastName,
                    company: data.company,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    zip: data.zip,
                    phone: data.phone,
                    otherPhone: data.otherPhone,
                    fax: data.fax,
                    email: data.email,
                    website: data.website,
                    specialties: data.specialties,
                    treatmentOrientation: data.treatmentOrientation,
                    insuranceAccepted: data.insuranceAccepted,
                    treatmentModality: data.treatmentModality,
                    assessmentEvaluations: data.assessmentEvaluations,
                    populationsServed: data.populationsServed,
                    languages: data.languages
                }
            )
        });

        if (! response.ok) {
            setError(response.statusText);
            console.log(error)
        }
    }

    return (
        <div>
            <div className="card-section offset">
                <Container>
                    <div className="card-center">
                        <h1 className="searchTitle">Application Form</h1>
                        <h5>
                            You may either fill out our digital form, or fill out a pdf version and submit it via email.
                                          Please fill out all fields.
                                          After application is submit and payment is recieved, please wait a
                                          few buisness days to be reflected on the search directory.

                        </h5>

                        <div className="apply-div">
                            <h5>PDF Application:
                                <a href="/images/MPA 2020 Membership Application.pdf" download className="landingButton applybtn">Download</a>
                            </h5>
                        </div>
                        <form onSubmit={submitApplication}
                            class="form">
                            <FormGroup>
                                <Label>Full Name</Label>
                                <Input required="required" name="name" placeholder="Full Name"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input required="required" name="lastName" placeholder="Last Name"
                                    onChange={onChange}/>
                            </FormGroup>
                            <Label>Company</Label>
                            <Input required="required" name="company" placeholder="Company"
                                onChange={onChange}/>
                            <FormGroup>
                                <Label>Address</Label>
                                <Input required="required" name="address" placeholder="Address"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>City</Label>
                                <Input required="required" name="city" placeholder="City"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>State</Label>
                                <Input required="required" name="state" placeholder="State"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Zipcode</Label>
                                <Input required="required" name="zip" placeholder="Zipcode"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input required="required" name="phone" placeholder="Phone Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Other Phone</Label>
                                <Input required="required" name="otherPhone" placeholder="Second Phone Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Fax</Label>
                                <Input required="required" name="fax" placeholder="Fax Number"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input required="required" name="email" placeholder="Email Address"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Website</Label>
                                <Input required="required" name="website" placeholder="Website"
                                    onChange={onChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Specialties</Label>
                                <input onChange={handleDisorders}
                                    type="checkbox"
                                    id="disorder1"
                                    name="disorder1"
                                    value="Bike"></input>
                                <label for="disorder1">
                                    Insurance 1</label>
                                <input onChange={handleDisorders}
                                    type="checkbox"
                                    id="disorder2"
                                    name="disorder2"
                                    value="Bike2"></input>
                                <label for="disorder2">
                                    Insurance 2</label>
                                <input onChange={handleDisorders}
                                    type="checkbox"
                                    id="disorder3"
                                    name="disorder3"
                                    value="Bike3"></input>
                                <label for="disorder3">
                                    Insurance 3</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Treatment Orientation</Label>
                                <input onChange={treatmentOrientation}
                                    type="checkbox"
                                    id="orientation1"
                                    name="orientation1"
                                    value="Bike"></input>
                                <label for="orientation1">
                                    Insurance 1</label>
                                <input onChange={treatmentOrientation}
                                    type="checkbox"
                                    id="orientation2"
                                    name="orientation2"
                                    value="Bike2"></input>
                                <label for="orientation2">
                                    Insurance 2</label>
                                <input onChange={treatmentOrientation}
                                    type="checkbox"
                                    id="orientation3"
                                    name="orientation3"
                                    value="Bike3"></input>
                                <label for="orientation3">
                                    Insurance 3</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Insurance Accepted</Label>
                                <input onChange={handleInsurance}
                                    type="checkbox"
                                    id="insurance1"
                                    name="insurance1"
                                    value="Bike"></input>
                                <label for="insurance1">
                                    Insurance 1</label>
                                <input onChange={handleInsurance}
                                    type="checkbox"
                                    id="insurance2"
                                    name="insurance2"
                                    value="Bike2"></input>
                                <label for="insurance2">
                                    Insurance 2</label>
                                <input onChange={handleInsurance}
                                    type="checkbox"
                                    id="insurance3"
                                    name="insurance3"
                                    value="Bike3"></input>
                                <label for="insurance3">
                                    Insurance 3</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Treatment Mode</Label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode1"
                                    name="Individual"
                                    value="Bike"></input>
                                <label for="mode1">
                                    Individual</label>
                                <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode2"
                                    name="Couples"
                                    value="Bike2"></input>
                                <label for="mode2">
                                    Couples</label>
                                    <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode3"
                                    name="Family"
                                    value="Bike3"></input>
                                <label for="mode3">
                                    Family</label>

                                    <input onChange={handleTreatment}
                                    type="checkbox"
                                    id="mode4"
                                    name="Group"
                                    value="Bike3"></input>
                                <label for="mode4">
                                Group</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Assement Evaluations</Label>
                                <input onChange={handleAssessments}
                                    type="checkbox"
                                    id="test1"
                                    name="test1"
                                    value="Bike"></input>
                                <label for="test1">
                                    Insurance 1</label>
                                <input onChange={handleAssessments}
                                    type="checkbox"
                                    id="test2"
                                    name="test2"
                                    value="Bike2"></input>
                                <label for="test2">
                                    Insurance 2</label>
                                <input onChange={handleAssessments}
                                    type="checkbox"
                                    id="test3"
                                    name="test3"
                                    value="Bike3"></input>
                                <label for="test3">
                                    Insurance 3</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Populations Served</Label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop1"
                                    name="Preschoolers"
                                    value="Bike"></input>
                                <label for="pop1">
                                    Preschoolers</label>
                                <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop2"
                                    name="Children"
                                    value="Bike2"></input>
                                <label for="pop2">
                                    Children</label>
                                    <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop3"
                                    name="Adolescents"
                                    value="Bike3"></input>
                                <label for="pop3">
                                    Adolescents</label>
                                    <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop4"
                                    name="Adults"
                                    value="Bike3"></input>
                                <label for="pop4">
                                    Adults</label>
                                    <input onChange={handlePopulation}
                                    type="checkbox"
                                    id="pop5"
                                    name="Seniors (over 64)"
                                    value="Bike3"></input>
                                <label for="pop5">
                                    Seniors (over 64)</label>
                            </FormGroup>
                            <FormGroup>
                                <Label>Languages</Label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang1"
                                    name="Arabic"
                                    value="Bike"></input>
                                <label for="lang1">
                                  Arabic</label>
                                <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang2"
                                    name="French"
                                    value="Bike2"></input>
                                <label for="lang2">
                                    French</label>
                                    <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang3"
                                    name="Farsi/Persian"
                                    value="Bike3"></input>
                                <label for="lang3">
                                    Farsi/Persian</label>
                                    <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang4"
                                    name="German"
                                    value="Bike3"></input>
                                <label for="lang4">
                                    German</label>
                                    <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang5"
                                    name="Spanish"
                                    value="Bike3"></input>
                                <label for="lang5">
                                    Spanish</label>
                                    <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang6"
                                    name="Am Sign Language"
                                    value="Bike3"></input>
                                <label for="lang6">
                                    Am Sign Language</label>
                                    <input onChange={handleLanguages}
                                    type="checkbox"
                                    id="lang7"
                                    name="Polish"
                                    value="Bike"></input>
                                <label for="lang7">
                                    Polish</label>
                            </FormGroup>
                            <div className="order-button-wrapper">
                                <input value="Submit Application" type="submit" className="landingButton ni"
                                    data={data}/>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Apply;
