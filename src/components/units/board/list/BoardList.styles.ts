import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border: solid gray;
  padding: 60px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListTable = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const HeaderLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid grey;
`;
export const TableLabel = styled.div`
  font-size: 15px;
  text-align: center;
  border-bottom: 1px solid grey;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3.5fr 1fr 1fr;
`;
export const Image = styled.img`
  width: 18px;
  height: 18px;
`;
export const NewButton = styled.button`
  width: 170px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  border-radius: 10px;
  border: 1px solid grey;
`;
