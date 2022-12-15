import styled from 'styled-components';

const DataError = () => {
  return (
    <ErrorMessage>
      {'Coś poszło nie tak! Sprawdź czy odpaliłeś json server komendą "yarn server" :)'}
    </ErrorMessage>
  );
};

export default DataError;

const ErrorMessage = styled.h2`
  margin-top: 50px;
  font-size: 45px;
  text-align: center;
  color: #3a4966;

  @media (max-width: 992px) {
    font-size: 25px;
  }
`;
