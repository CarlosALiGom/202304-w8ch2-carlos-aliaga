import { AccesDataStructure } from "../../types";
import PersonalDataFormStyled from "../PersonalDataForm/PersonalDataFormStyled";

interface AccesDataProps {
  AccesData: AccesDataStructure;
  setAccesData: React.Dispatch<React.SetStateAction<AccesDataStructure>>;
}
const AccesDataForm = ({
  AccesData,
  setAccesData,
}: AccesDataProps): React.ReactElement => {
  const onChangeAccesData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccesData({
      ...AccesData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <PersonalDataFormStyled autoComplete="off">
      <h2 className="form-title">Acces Data</h2>
      <div className="form__control">
        <label className="form__label" htmlFor="username">
          Username:
        </label>
        <input
          className="form__input"
          type="text"
          id="username"
          onChange={onChangeAccesData}
          value={AccesData.username}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          onChange={onChangeAccesData}
          value={AccesData.password}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="repeatPasword">
          Repeat Pasword:
        </label>
        <input
          className="form__input"
          type="password"
          id="repeatPasword"
          onChange={onChangeAccesData}
          value={AccesData.repeatPasword}
        />
      </div>
    </PersonalDataFormStyled>
  );
};

export default AccesDataForm;
