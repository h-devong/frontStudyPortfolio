import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);
  const onClickList = () => {
    router.push("/boards");
  };
  const onClickEdit = () => {
    console.log(`/boards/${router.query.boardId}/edit`);
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    router.push("/boards");
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickList={onClickList}
        onClickEdit={onClickEdit}
      />
    </>
  );
}
