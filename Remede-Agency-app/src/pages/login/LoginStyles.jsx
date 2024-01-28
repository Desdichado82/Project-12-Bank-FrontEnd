import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-dark);
`;

export const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: var(--background-light);
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SignInIcon = styled.i`
  font-size: 5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
   justify-content: center;
  margin-bottom: 1rem;
  gap:1rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const EditLabel = styled.label`
  font-weight: bold;
  color:#2c3e50;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1.2rem;
`;

export const InputRemember = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RememberCheckbox = styled.input`
  margin-right: 0.25rem;
`;

export const RememberLabel = styled.label`
  font-size: 1rem;
`;

export const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  border: 2px solid var(--accent-color);
  background-color: var(--accent-color);
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: var(--accent-hover-color);
    color:var(--accent-color);
  }
`;

// New styles for error messages
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  cursor: pointer;
`;
