import styled from "styled-components";

const AppStyled = styled.div`
  padding: 30px;
  background: linear-gradient(45deg, #d94681, #f68140);
  min-height: 100vh;
  color: #ffffff;

  .title {
    font-size: 40px;
    margin-bottom: 15px;
    text-align: center;
  }

  .control-buttons {
    display: flex;
    padding: 5px;
    justify-content: space-between;
    margin-top: 10px;
  }
  .button {
    margin-top: 5px;
    padding: 8px;
    width: 100px;
    background: linear-gradient(45deg, #d94681, #f68140);
    color: #ffffff;
    border-radius: 10px;
    border: 2px solid #ffffff;
    :disabled {
      background-color: #ffffff;
      color: #f68140;
      cursor: auto;
    }
  }
`;

export default AppStyled;
