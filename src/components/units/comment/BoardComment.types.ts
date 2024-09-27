import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentProps {
  writer: string;
  password: string;
  contents: string;
  data: any;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSummit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
}
