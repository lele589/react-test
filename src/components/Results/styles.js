import styled from 'styled-components';

export const List = styled.div`
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      width: 100%;
`;

export const ListItem = styled.div`
      padding: 15px;
      margin-bottom: 10px;
      box-shadow: 0 4px 11px #1346a2;
      background-color: var(--colors-white);
      color: var(--colors-black);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 3px;
      font-size: 1.2rem;
`;
