import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoartInput } from "./BoardWrite.types";
import { IMutation } from "../../../../commons/types/generated/types";

export default function BoardWrite(
  props: Pick<IBoardWriteProps, "isEdit" | "data">
) {
  const [createBoard] =
    useMutation<Pick<IMutation, "createBoard">>(CREATE_BOARD);
  const [updateBoard] =
    useMutation<Pick<IMutation, "updateBoard">>(UPDATE_BOARD);
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (!props.isEdit && event.target.value && title && contents && password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (!props.isEdit && event.target.value && title && contents && writer) {
      //수정모드 아닐떄
      setIsActive(true);
    } else if (props.isEdit && event.target.value && (title || contents)) {
      //수정모드일때
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (!props.isEdit && event.target.value && writer && contents && password) {
      setIsActive(true);
    } else if (props.isEdit && password && (event.target.value || contents)) {
      //수정모드일때
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (!props.isEdit && event.target.value && title && writer && password) {
      setIsActive(true);
    } else if (props.isEdit && password && (event.target.value || title)) {
      //수정모드일때
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSummit = async () => {
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        router.push(`${result.data?.createBoard._id}`);
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    const updateBoardInput: IUpdateBoartInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    if (!password) {
      setPasswordError("패스워드 입력");
    }
    const result = await updateBoard({
      variables: {
        updateBoardInput,
        password,
        boardId: router.query.boardId,
      },
    });
    router.push(`/boards/${result.data?.updateBoard._id}`);
  };
  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSummit={onClickSummit}
        onClickUpdate={onClickUpdate}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        isActive={isActive}
        isEdit={props.isEdit}
        data={props.data} //undifined or data
      />
    </>
  );
}
