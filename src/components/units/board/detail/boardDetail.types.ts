import { MouseEvent } from "react";

export interface IBoardDetailProps {
  data: any;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
}
