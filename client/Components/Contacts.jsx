import { names } from 'debug';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function ContactForm ({props}) {
  // const {register, handleSubmit} = useForm();
  // const [ contact, setContact] = useState([]);
  const { contact } = props; 
  // function onSubmit(data) {
  //   // set state
  //   // let oldContact = contact
  //   // oldContact.push(data)
  //   // setContact(oldContact)
  //   setContact(contacts => [...contacts, data]);
  // };

  // const contactArray = []
  // for(let i = 0; i < contact.length; i++){
  //   contactArray.push(
  //     //basically the want the style of the renderSubmit inside this for loop to dynamically render multiple components of the "render sumbit"
  //     // <RenderSubmit props={data}/>
  //     <div>
  //     <div>
  //       Name: {contact[i].Name}
  //     </div>
  //     <div>
  //       Position: {contact[i].Position}
  //     </div>
  //     <div>
  //       Email: {contact[i].Email}
  //     </div>
  //     <div>
  //       Phone Number: {contact[i].Phone}
  //     </div>
  //     <div>
  //       LinkedIn: {contact[i].LinkedIn}
  //     </div>
  //     <br />
  //   </div>
  //   );
  // }

  return (
    <div>
      Contacts: {contact/* <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <fieldset>
          <label>
            <p>New Contact</p>
            <input placeholder="Name" type="text" ref={register} name="Name"/> 
            <input placeholder="Position" type="text" ref={register} name="Position"/>
            <input placeholder="Email" type="text" ref={register} name="Email"/>
            <input placeholder="Phone Number" type="text" ref={register} name="Phone"/>
            <input placeholder="LinkedIn" type="text" ref={register} name="LinkedIn"/>
          </label>
        </fieldset>
        <button type="submit" autoComplete="off">Add Contact</button>
      </form>
      {contactArray} */}
    </div>
  );
};

