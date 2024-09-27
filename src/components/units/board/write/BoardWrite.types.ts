import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSummit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoartInput {
  title?: string;
  contents?: string;
}
