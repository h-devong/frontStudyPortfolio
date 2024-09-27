// import { useRouter } from "next/router";

import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function BoardEditPage() {
  // const router = useRouter(); 여기서도 넘길수있음
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardWrite data={data} isEdit={true} />;
}
