import { MouseEvent } from "react";

export interface IBoardListProps {
  data?: any;
  onClickNew: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickRow: (event: MouseEvent<HTMLButtonElement>) => void;
}
