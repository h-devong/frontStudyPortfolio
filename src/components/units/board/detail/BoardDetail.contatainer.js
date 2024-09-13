import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
export default function BoardDetail(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: props.router.query.boardId,
    },
  });
  return (
    <>
      <BoardDetailUI data={data} />
    </>
  );
}
