import React, { useState } from 'react';


const indianStatesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", 
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", 
  "Puducherry"
];
const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
const AddMoreDetails = () => {
    const [page, setPage] = useState(1);
  const [details, setDetails] = useState({
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    dob: { day: '', month: '', year: '' },
    sex: '',
    medicaidNo: '',
    secondaryInsurancePhone: '',
    secondaryInsurancePolicyNo: '',
    secondaryInsuranceGroupNo: '',
    podiatrist: '',
    lastVisitDate: '',
    diabetes: '',
    otherDiabetesInfo: '',
    conditions: '',
    physician: '',
    npi: '',
    physicianAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: '',
    physicianPhone: '',
    physicianFax: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevState => ({
      ...prevState,
      dob: {
        ...prevState.dob,
        [name]: value
      }
    }));
  };
  const handleOtherDiabetesInfoChange = (e) => {
    const { value } = e.target;
    setDetails(prevState => ({
      ...prevState,
      otherDiabetesInfo: value
    }));
  };
  const navigateToPage2 = () => {
    // Simply set the page state to 2 to navigate to the second page
    setPage(2);
};

  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Generate days 1 to 31
  const years = Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i); // Generate years from current year to 120 years ago

  const renderMonths = () => {
    return monthNames.map((month, index) => (
      <option key={index} value={index + 1}>{month}</option>
    ));
  };
  const renderYears = () => {
    return years.map(year => (
      <option key={year} value={year}>{year}</option>
    ));
  };
 
  return (
    <div>
        {page === 1 && (
            <div>
      <h1 style={{ textAlign: 'center', color: '#60beeb', fontSize: '45px'}}>Add More Details - 1</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '400px', marginTop: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="text" id="phone" name="phone" value={details.phone} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="addressLine1">Address Line 1</label>
          <br />
          <input type="text" id="addressLine1" name="addressLine1" value={details.addressLine1} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="addressLine2">Address Line 2</label>
          <br />
          <input type="text" id="addressLine2" name="addressLine2" value={details.addressLine2} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }} />
        </div>
        <div style={{ display: 'flex', marginBottom: '15px' }}>
          <div style={{ marginRight: '15px' }}>
            <label htmlFor="city">City</label>
            <br />
            <input type="text" id="city" name="city" value={details.city} onChange={handleChange} style={{ width: '400px', marginTop: '8px', border: '1px solid #000', width: '400px', padding: '5px' }}/>
          </div>
          <div style={{ marginRight: '15px', marginLeft: '10px' }}>
            <label htmlFor="state">State</label>
            <br />
            <select id="state" name="state" value={details.state} onChange={handleChange} style={{ width: '200px', marginTop: '8px', border: '1px solid #000', width: '200px', padding: '5px', marginLeft: '1px'}}>
              <option value="">Select a state</option>
              {indianStatesList.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div style= {{ marginLeft: '10px' }}>
            <label htmlFor="zip">Zip Code</label>
            <br />
            <input type="text" id="zip" name="zip" value={details.zip} onChange={handleChange} style={{ width: '100px', marginTop: '8px', border: '1px solid #000', width: '100px', padding: '5px', marginLeft: '1px' }}/>
          </div>
        </div>
        {/* Date of Birth */}
        <div style={{ marginBottom: '15px' }}>
          <label>Date of Birth</label>
          <div style={{ display: 'flex', marginTop: '8px' }}>
            {/* Day Dropdown */}
            <select name="dob" value={details.dob.day} onChange={handleDOBChange} style={{ width: '100px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Day</option>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            {/* Month Dropdown */}
            <select name="dob" value={details.dob.month} onChange={handleDOBChange} style={{ width: '120px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Month</option>
              {renderMonths()}
            </select>
            {/* Year Dropdown */}
            <select name="dob" value={details.dob.year} onChange={handleDOBChange} style={{ width: '100px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Year</option>
              {renderYears()}
            </select>
           
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Sex</label>
          <br />
          
              <label>
                <input type="radio" name="sex" value="male" onChange={handleChange} />
                M
              </label>
              <span style={{ margin: '0 15px' }}></span>
              <label>
                <input type="radio" name="sex" value="female" onChange={handleChange} />
                F
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
          <label htmlFor="medicaidNo">Medicaid No.</label>
          <br />
          <input type="text" id="medicaidNo" name="medicaidNo" value={details.medicaidNo} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="secondaryInsurance">Secondary Insurance</label>
          <br />
          <input type="text" id="secondaryInsurance" name="secondaryInsurance" value={details.secondaryInsurance} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="secondaryInsurancePhone">Secondary Insurance Phone</label>
          <br />
          <input type="text" id="secondaryInsurancePhone" name="secondaryInsurancePhone" value={details.secondaryInsurancePhone} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="secondaryInsurancePolicyNo">Secondary Insurance Policy No.</label>
          <br />
          <input type="text" id="secondaryInsurancePolicyNo" name="secondaryInsurancePolicyNo" value={details.secondaryInsurancePolicyNo} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="secondaryInsuranceGroupNo">Secondary Insurance Group No.</label>
          <br />
          <input type="text" id="secondaryInsuranceGroupNo" name="secondaryInsuranceGroupNo" value={details.secondaryInsuranceGroupNo} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="podiatrist">Podiatrist</label>
          <br />
          <input type="text" id="podiatrist" name="podiatrist" value={details.podiatrist} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Last Visit Date</label>
          <div style={{ display: 'flex', marginTop: '8px' }}>
            {/* Day Dropdown */}
            <select name="lastVisitDate" value={details.lastVisitDate.day} onChange={handleDOBChange} style={{ width: '100px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Day</option>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>
            {/* Month Dropdown */}
            <select name="lastVisitDate" value={details.lastVisitDate.month} onChange={handleDOBChange} style={{ width: '120px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Month</option>
              {renderMonths()}
            </select>
            {/* Year Dropdown */}
            <select name="lastVisitDate" value={details.lastVisitDate.year} onChange={handleDOBChange} style={{ width: '100px', marginRight: '10px', border: '1px solid #000', padding: '5px' }}>
              <option value="">Year</option>
              {renderYears()}
            </select>
           
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>This patient has diabetes mellitus</label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
          
              <label>
                <input type="radio" name="diabetes" value="E11.9" onChange={handleChange} />
                E11.9
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="radio" name="diabetes" value="E10.9" onChange={handleChange} />
                E10.9
              </label>
              </div>
              <div>
              <label>
                <input type="radio" name="diabetes" value="other" onChange={handleChange} />
               Other:
              </label>
              {details.diabetes === 'other' && (
                <div>
            <input 
              type="text"
              name="otherDiabetesInfo"
              value={details.otherDiabetesInfo}
              onChange={handleOtherDiabetesInfoChange}
              style={{ marginTop: '8px', border: '1px solid #000', padding: '5px', width: '750px'}}
              placeholder="Specify other diabetes information"
            />
            </div>
          )}
          </div>
            </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
          <label>This patient has one or more of the following conditions. Check all that apply:</label>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
          
              <label>
                <input type="checkbox" name="coditions" value=" History of partial or complete amputation of the foot (S98)" onChange={handleChange} />
               History of partial or complete amputation of the foot (S98)
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="checkbox" name="conditions" value="History of previous foot ulceration (Z86.31)" onChange={handleChange} />
               History of previous foot ulceration (Z86.31)
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="checkbox" name="conditions" value=" History of Pre-ulcerative callus (L84)" onChange={handleChange} />
               History of Pre-ulcerative callus (L84)
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="checkbox" name="conditions" value=" Foot deformity (M20.60 or M21.969)" onChange={handleChange} />
              Foot deformity (M20.60 or M21.969)
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="checkbox" name="conditions" value="Poor Circulation (I99.8)" onChange={handleChange} />
              Poor Circulation (I99.8)
              </label>
              </div>
              <div style={{ marginBottom: '5px' }}></div>
              <div>
              <label>
                <input type="checkbox" name="conditions" value="Peripheral neuropathy with evidence of callus formation (G57)" onChange={handleChange} />
              Peripheral neuropathy with evidence of callus formation (G57)
              </label>
              </div>
              </div>
              </div>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ marginRight: '10px' }}>
           <p style={{ textAlign: 'center', marginTop: '20px', marginBottom: '25px' }}> {page}</p>
        </div>
        <button type="button" onClick={navigateToPage2}>
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-arrow-right-thin.png" alt="Arrow icon" style={{ width: '20px', height: '20px', color: 'black'}} />
        </button>
                            
     </div>
     </div>
)}
        {page === 2 && (
                <div>
                    <h1 style={{ textAlign: 'center', color: '#60beeb', fontSize: '45px'}}>Add More Details - 2</h1>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '400px', marginRight: '447px', marginTop: '30px' }}>
                    <div style={{ marginBottom: '20px' }}>
                    <p>I am treating this patient under a comprehensive plan for his/her diabetes and by signing below. I certify that it is medically necessary for the above named patient to receive:</p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                    <p><strong>one (1) pair of depth-inlay shoes (A5500) and three (3) pairs of Custom (A5513) or heat-moldable (A5512) inserts</strong></p>
                    </div>
                    <div style={{ marginBottom: '30px' }}>
                    <label htmlFor="physicianSignature">Physician Signature</label>
                          <br />
                    <input type="text" id="physicianSignature" name="physicianSignature" value={details.physicianSignature} onChange={handleChange} style={{ width: '750px', marginTop: '2px', border: '1px solid #000', padding: '5px'}} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
          <label htmlFor="physician">Physician</label>
          <br />
          <input type="text" id="physician" name="physician" value={details.physician} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
          <text>(Must be an MD or DO)</text>
          </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="npi">NPI</label>
          <br />
          <input type="text" id="npi" name="npi" value={details.npi} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="physicianAddress">Physician Address</label>
          <br />
          <input type="text" id="physicianAddress" name="physicianAddress" value={details.physicianAddress} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
          <text>Address Line 1</text>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" id="addressLine2" name="addressLine2" value={details.addressLine2} onChange={handleChange} style={{ width: '750px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
          <text>Address Line 2</text>
        </div> 
        <div style={{ display: 'flex', marginBottom: '15px' }}>
          <div style={{ marginRight: '15px' }}>
            <label htmlFor="city">City</label>
            <br />
            <input type="text" id="city" name="city" value={details.city} onChange={handleChange} style={{ width: '400px', marginTop: '8px', border: '1px solid #000', width: '400px', padding: '5px' }}/>
          </div>
          <div style={{ marginRight: '15px', marginLeft: '10px' }}>
            <label htmlFor="state">State</label>
            <br />
            <select id="state" name="state" value={details.state} onChange={handleChange} style={{ width: '200px', marginTop: '8px', border: '1px solid #000', width: '200px', padding: '5px', marginLeft: '1px'}}>
              <option value="">Select a state</option>
              {indianStatesList.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div style= {{ marginLeft: '10px' }}>
            <label htmlFor="zip">Zip Code</label>
            <br />
            <input type="text" id="zip" name="zip" value={details.zip} onChange={handleChange} style={{ width: '100px', marginTop: '8px', border: '1px solid #000', width: '100px', padding: '5px', marginLeft: '1px' }}/>
          </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
          <label htmlFor="physicianPhone">Physician Phone</label>
          <br />
          <input type="text" id="physicianPhone" name="physicianPhone" value={details.physicianPhone} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="physicianFax">Physician Fax</label>
          <br />
          <input type="text" id="physicianFax" name="physicianFax" value={details.physicianFax} onChange={handleChange} style={{ width: '7500px', marginTop: '8px', border: '1px solid #000', width: '750px', padding: '5px' }}  />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ marginRight: '10px' }}>
           <p style={{ textAlign: 'center', marginTop: '20px', marginBottom: '25px' }}> {page}</p>
        </div>
        </div>
                    </form>
                </div>
            )}
        </div>
  );
};

export default AddMoreDetails;
