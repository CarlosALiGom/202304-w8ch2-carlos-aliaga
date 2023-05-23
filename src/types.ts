export interface PersonalDataStructure {
  name: string;
  lastname: string;
  email: string;
  birthday: string;
}

export interface AccesDataStructure {
  username: string;
  password: string;
  repeatPasword: string;
}

export const initialPersonalData: PersonalDataStructure = {
  name: "",
  lastname: "",
  email: "",
  birthday: "",
};
