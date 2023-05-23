import PersonalDataForm from "../PersonalDataForm/PersonalDataForm";
import { useState } from "react";
import { initialPersonalData } from "../../types";
import AppStyled from "./AppStyled";
const App = (): JSX.Element => {
  const [PersonalData, setPersonalData] = useState(initialPersonalData);

  return (
    <AppStyled>
      <h1 className="title">!Tinder</h1>
      <PersonalDataForm
        PersonalData={PersonalData}
        setPersonalData={setPersonalData}
      />
    </AppStyled>
  );
};

export default App;
