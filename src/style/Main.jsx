import styled from 'styled-components'

export const Container = styled.div`
display: grid;
width: 400px;
hieght: 100vh;
justify-content: center;
align-content: center;
margin: 40px auto;
grid-template-columns: repeat(4, 100px);
grid-template-rows: minmax(120px, auto) repeat(5, 100px);
border-radius: 10px;
`;

export const Screen = styled.div`
grid-column: 1 / -1;
background-color: rgba(255, 255, 255, 0.75);
display: flex;
justify-content: space-around;
flex-direction: column;
padding: 10px;
word-wrap: break-word;
word-break: break-all;
text-align: right;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

export const Prevoius = styled.div`
  color: black;
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: black;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `background-color:gray;`};
  ${({ control }) => control && `background-color:grey;`};
  ${({ equals }) =>
    equals && `background-color:gray;border-bottom-right-radius:10px;`};
  ${({ decimal }) =>
    decimal && `background-color:gray;border-bottom-left-radius:10px;`};
`;