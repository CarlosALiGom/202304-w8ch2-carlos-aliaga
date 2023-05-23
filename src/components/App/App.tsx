import PersonalDataForm from "../PersonalDataForm/PersonalDataForm";
import AppStyled from "./AppStyled";
const App = (): JSX.Element => {
  return (
    <AppStyled>
      <h1 className="title">!Tinder</h1>
      <PersonalDataForm />
    </AppStyled>
  );
};

export default App;
