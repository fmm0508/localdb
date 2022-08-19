import React, { useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState(null);

  const dispatchFetch = async () => {
    const response = await fetch('https://dummyjson.com/products/1');
    const result = await response.json();
    return result;
  }

  function onFormSubmit(event) {
    event.preventDefault();
    const personInfo = Object.create(null);
    personInfo.first_name = event.target[0].value;
    personInfo.middle_name = event.target[1].value;
    personInfo.last_name = event.target[2].value;
    personInfo.dob = event.target[3].value;
    personInfo.email = event.target[4].value;
    personInfo.street = event.target[5].value;
    personInfo.city = event.target[6].value;
    personInfo.state = event.target[7].value;
    personInfo.zip = event.target[8].value;
    personInfo.phone = event.target[9].value;
    
    // if(personInfo.first_name.length && 
    //   personInfo.middle_name.length && 
    //   personInfo.last_name.length && 
    //   personInfo.dob.length &&
    //   personInfo.email.length &&
    //   personInfo.street.length &&
    //   personInfo.city.length &&
    //   personInfo.state.length &&
    //   personInfo.zip.length &&
    //   personInfo.phone.length) 

    console.log('everything is good.....');
    dispatchFetch()
    .then(function(response) {
      console.log(response);
      setData(response);
    });
  }

  return (
    <div>
      <h3>LocalDB </h3>
      <p>,
          
      </p>
      <ul>
        <li>Production: https://aesthetic-khapse-f59b87.netlify.app/</li>
        <li>Staging: https://friendly-druid-85833f.netlify.app/</li>
        <li>Development: https://lucent-nasturtium-f19a77.netlify.app/</li>
      </ul>
      
      <form onSubmit={ onFormSubmit }>
        <input type="text" name="firstName" size="60" placeholder='First name'/>
        <input type="text" name="middleName" size="60" placeholder='Middle name(optional)'/>
        <input type="text" name="lastName"  size="60" placeholder='Last name'/>
        <input type="date" name="dateOfBirth" placeholder='Date of birth'/>
        <input type="email" name="emailAddress" placeholder='Email address'/>
        <input type="text" name="street" placeholder='Street'/>
        <input type="text" name="city" placeholder='City'/>
        <input type="text" name="state" placeholder='State'/>
        <input type="number" name="zipCode" placeholder='Zip'/>
        <input type="tel" name="phoneNumber" placeholder='Phone'/>
        <button>submit</button>
      </form>
      <center>
        <h3>result:</h3>
        <div>
          <p>{ data ? data.id : '' } </p>
          <p>{ data ? data.title : '' } </p>
          <p>{ data ? data.description : '' } </p>
          <p>{ data ? data.category : '' } </p>
          <h1>{ data ? data.stock : '' } </h1>
          {/* <img alt='image' src={ data ? data.thumbnail : '' }/> */}
        </div>
      </center>
    </div>
  );
}

export default App;
