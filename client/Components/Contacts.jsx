import React, { Component, useState } from 'react';
import { useForm } from "react-hook-form";

function ContactForm () {
  const {register, handleSubmit} = useForm();
  const { contact, setContact } = useContext();
  
  const onSubmit = (data) => {
    // set state
    // but also call the renderSubmit function passing in data
  };

  return (
    <div>
      <form onSubmit={handleSubmit()} autoComplete="off">
        <fieldset>
          <label>
            <p>New Contact</p>
            {/* label instead of name? */}
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

function renderSubmit (data) {
  
  return (
    <div>
      <div>Name: 
        {data.name}
      </div>
      <div>Position: 
        {data.position}
      </div>
      <div>Email: 
        {data.email}
      </div>
      <div>Phone Number: 
        {data.phone}
      </div>
      <div>LinkedIn: 
        {data.linkedin}
      </div>
    </div>
  );
};

