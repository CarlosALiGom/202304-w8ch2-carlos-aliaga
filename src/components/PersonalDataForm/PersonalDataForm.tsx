import { useState } from "react";
import { PersonalDataStructure } from "../../types";
import PersonalDataFormStyled from "./PersonalDataFormStyled";

const PersonalDataForm = (): React.ReactElement => {
  const initialPersonalData: PersonalDataStructure = {
    name: "",
    lastname: "",
    email: "",
    birthday: "",
  };

  const [PersonalData, setPersonalData] = useState(initialPersonalData);

  const onChangePersonalData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...PersonalData,
      [event.target.id]: event.target.value,
    });
  };

  const isValidForm =
    PersonalData.name !== "" &&
    PersonalData.lastname !== "" &&
    PersonalData.email !== "" &&
    PersonalData.birthday !== "";

  return (
    <PersonalDataFormStyled autoComplete="off">
      <h2 className="form-title">Personal Data</h2>
      <div className="form__control">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          onChange={onChangePersonalData}
          value={PersonalData.name}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="lastname">
          Lastname:
        </label>
        <input
          className="form__input"
          type="text"
          id="lastname"
          onChange={onChangePersonalData}
          value={PersonalData.lastname}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="birthday">
          Birthday:
        </label>
        <input
          className="form__input"
          type="date"
          id="birthday"
          onChange={onChangePersonalData}
          value={PersonalData.birthday}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="email">
          Email:
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          onChange={onChangePersonalData}
          value={PersonalData.email}
        />
      </div>
      <button className="form__button" type="submit" disabled={!isValidForm}>
        Next
      </button>
    </PersonalDataFormStyled>
  );
};

export default PersonalDataForm;
