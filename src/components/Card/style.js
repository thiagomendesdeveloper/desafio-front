import styled from 'styled-components';


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 30px auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Article = styled.article`
  border: 1px solid #f7f7f7;
  background: #f1f1f1;
  padding: 15px;
  border-radius: 4px;

  :hover {
    background: #dbf4ff;
    border: 1px solid #ade6ff;
  }

  h3 {
    margin-bottom: 10px;
  }

  time {
    font-size: 13px;
    font-style: italic;
    color: #c1c1c1;  
  }

  p {
    margin: 15px 0;
  }
`;