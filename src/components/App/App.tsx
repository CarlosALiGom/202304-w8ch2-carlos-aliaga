import PersonalDataForm from "../PersonalDataForm/PersonalDataForm";
import { useState } from "react";
import { initialAccesData, initialPersonalData } from "../../types";
import AppStyled from "./AppStyled";
import AccesDataForm from "../AccesDataForm/AccesDataForm";
const App = (): JSX.Element => {
  const [PersonalData, setPersonalData] = useState(initialPersonalData);

  const [AccesData, setAccesData] = useState(initialAccesData);

  const [nextForm, setNextForm] = useState(false);

  const isValidPersonalDataForm =
    PersonalData.name !== "" &&
    PersonalData.lastname !== "" &&
    PersonalData.email !== "" &&
    PersonalData.birthday !== "";

  const isValidAccesDataForm =
    AccesData.username !== "" &&
    AccesData.password !== "" &&
    AccesData.repeatPasword !== "";

  return (
    <AppStyled>
      <h1 className="title">!Tinder</h1>
      {!nextForm ? (
        <PersonalDataForm
          PersonalData={PersonalData}
          setPersonalData={setPersonalData}
        />
      ) : (
        <AccesDataForm AccesData={AccesData} setAccesData={setAccesData} />
      )}
      <div className="control-buttons">
        <button
          className="button"
          type="submit"
          onClick={() => setNextForm(false)}
          disabled={!isValidAccesDataForm}
        >
          Previous
        </button>
        <button
          className="button"
          type="submit"
          onClick={() => setNextForm(true)}
          disabled={!isValidPersonalDataForm}
        >
          Next
        </button>
      </div>
    </AppStyled>
  );
};

export default App;
