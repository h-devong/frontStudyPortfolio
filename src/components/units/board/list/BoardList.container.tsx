import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARDS);
  const onClickRow = (e: MouseEvent<HTMLButtonElement>) => {
    router.push(`boards/${e}`);
  };
  const onClickNew = () => {
    router.push("/boards/new");
  };

  return (
    <BoardListUI data={data} onClickRow={onClickRow} onClickNew={onClickNew} />
  );
}
