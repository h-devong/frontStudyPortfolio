// import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardComment from "../../../src/components/units/comment/BoardComment.container";
export default function BoardDetailPage() {
  // const router = useRouter(); 여기서도 넘길수있음
  return (
    <>
      <BoardDetail />
      <BoardComment />
    </>
  );
}
