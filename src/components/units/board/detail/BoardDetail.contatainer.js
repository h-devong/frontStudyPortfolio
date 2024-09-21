import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';
import { asyncMap } from '@apollo/client/utilities';
export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    router.push('/boards');
  };

  return (
    <>
      <BoardDetailUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
