import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <StyledContact className='p-2 border-secondary'>
      <legend className='control-label customer-legend pl-1 w-auto'>
        Kapcsolat
      </legend>
      <div className='form-container'>
        <div className='email'>
          <label htmlFor='exampleInputEmail1' className='form-label mt-4'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Kerjuk add meg az email cimed'
          />
          <small id='emailHelp' className='form-text text-muted'>
            Ide kuldunk majd ertesites
          </small>
        </div>
        <div className='textarea'>
          <div className='form-group'>
            <label htmlFor='exampleTextarea' className='form-label mt-4'>
              Foglald ossze par mondatba az elkepzelesed
            </label>
            <textarea
              className='form-control'
              id='exampleTextarea'
              rows='3'></textarea>
          </div>
        </div>
        <div className='file'>
          <div className='form-group'>
            <label htmlFor='formFile' className='form-label mt-4'>
              Kerjuk tolt fel desigod
            </label>
            <input className='form-control' type='file' id='formFile' />
          </div>
        </div>
        <div className='form-check my-4'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            Elfogadom es elolvasom az adatvedelmi tajekoztatot
          </label>
        </div>
      </div>
      <button type='button' className='btn btn-success my-3'>
        Ajanlatot teszek
      </button>
    </StyledContact>
  );
}

const StyledContact = styled.fieldset`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .form-container {
    width: 50%;
  }
  legend {
    float: none;
  }
  @media only screen and (max-width: 1200px) {
    .form-container {
      width: 75%;
    }
  }
  @media only screen and (max-width: 989px) {
    .form-container {
      width: 90%;
    }
  }
`;
