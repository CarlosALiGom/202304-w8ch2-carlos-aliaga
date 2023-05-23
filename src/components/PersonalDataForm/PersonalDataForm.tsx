import { PersonalDataStructure } from "../../types";
import PersonalDataFormStyled from "./PersonalDataFormStyled";

interface PersonalDataProps {
  PersonalData: PersonalDataStructure;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalDataStructure>>;
}

const PersonalDataForm = ({
  PersonalData,
  setPersonalData,
}: PersonalDataProps): React.ReactElement => {
  const onChangePersonalData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalData({
      ...PersonalData,
      [event.target.id]: event.target.value,
    });
  };

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
    </PersonalDataFormStyled>
  );
};

export default PersonalDataForm;
