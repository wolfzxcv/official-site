import { Box, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledIconButton = styled(IconButton)``;

export const StyledBoxTag = styled(Box)`
  width: 0;
  height: 0;
  position: relative;
  top: -13px;
  right: 3px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #c53030;
  transform: rotate(45deg);
`;

const gray100 = '#EDF2F7';
const red600 = '#C53030';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
  }

  thead,
  tfoot {
    th:not(:nth-of-type(2)) {
      width: 10%;
      padding: 3px;
    }
    th {
      color: white;
      background-color: ${red600};
    }
  }

  tbody {
    td {
      padding: 3px;
    }
  }

  tbody {
    tr:nth-of-type(odd) {
      background: ${gray100};
    }
  }
`;
