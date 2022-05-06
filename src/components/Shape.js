import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ width }) => width || '300px'};
  margin: 20px auto;
  padding: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`
