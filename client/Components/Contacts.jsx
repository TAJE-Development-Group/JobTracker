import { names } from 'debug';
import React, { Component, useState } from 'react';
import { useForm } from "react-hook-form";

export default function ContactForm () {
  const {register, handleSubmit} = useForm();
  const [ contact, setContact] = useState([{Name: 'personA'}, {Name: 'personB'}]);
  
  function onSubmit(data) {
    // set state
    let oldContact = contact
    oldContact.push(data)
    setContact(oldContact)
    // but also call the renderSubmit function passing in data
  };
  const contactArray = []
  for(let i = 0; i < contact.length; i++){
    contactArray.push(
      //basically the want the style of the renderSubmit inside this for loop to dynamically render multiple components of the "render sumbit"
      // <RenderSubmit props={data}/>
      <div>
      <div>Name: 
        {contact[i].Name}
      </div>
      <div>Position: 
        {contact[i].position}
      </div>
      <div>Email: 
        {contact[i].email}
      </div>
      <div>Phone Number: 
        {contact[i].phone}
      </div>
      <div>LinkedIn: 
        {contact[i].linkedin}
      </div>
    </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <fieldset>
          <label>
            <p>New Contact</p>
            <input type="text" ref={register} name="Name"/> 
            <input type="text" ref={register} name="Position"/>
            <input type="text" ref={register} name="Email"/>
            <input type="text" ref={register} name="Phone Number"/>
            <input type="text" ref={register} name="LinkedIn"/>
          </label>
        </fieldset>
        <button type="submit" autoComplete="off">Add Contact</button>
      </form>
      {contactArray}
    </div>
  );
};


