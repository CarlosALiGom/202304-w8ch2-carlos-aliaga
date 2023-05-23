import styled from "styled-components";

const PersonalDataFormStyled = styled.form`
  display: flex;
  margin: 0 auto;
  flex-basis: 400px;
  flex-direction: column;
  box-shadow: 15px 10px 15px -3px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  padding: 10px;
  color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 20px;
  gap: 10px;

  .form__control {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form__label {
    min-width: 80px;
    max-width: 400px;
  }

  .form__input {
    padding: 10px;
    border-radius: 10px;
    border: none;
  }

  .form__button {
    margin-top: 5px;
    padding: 8px;
    width: 100px;
    background: linear-gradient(45deg, #f68140, #d94681);
    color: #ffffff;
    border-radius: 10px;
    border: 2px solid #ffffff;
    :disabled {
      background-color: #a89e9e;
      color: #ffffff;
      cursor: auto;
    }
  }
`;

export default PersonalDataFormStyled;
