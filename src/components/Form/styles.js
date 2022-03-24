import styled from 'styled-components';

export const InputContainer = styled.div`
      background: var(--colors-white);
      border-radius: 30px;
      display: flex;
      align-items: center;
      padding: 3px;
`;

export const Input = styled.input`
      font-size: 1.1rem;
      padding: 12px 15px;
      border-radius: 30px;
      border: 0;
      
      &:focus {
         box-shadow: none;
         outline: 0;
      }

      @media (min-width: 768px) {
        min-width: 430px;
      }
`;

export const Submit = styled.button.attrs({
	type: 'submit'
})`
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 0;
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
      border-radius: 50%;
      transition: background-color .15s ease-in-out;
      background-color: var(--colors-black);

      &:hover {
            background: rgba(0,0,0,.75);
            text-decoration: none;
      }
`;
