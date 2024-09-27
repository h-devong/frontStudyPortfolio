import { ChangeEvent, useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComment.queries";
import { useRouter } from "next/router";

export default function BaordComment() {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data, refetch } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const onClickSummit = async () => {
    if (!writer || !password || !contents) {
      alert("패스워드 입력");
      return;
    }
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 5.0,
          },
          boardId: router.query.boardId,
        },
      });
      setContents("");
      setPassword("");
      setWriter("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickDelete = async (boardCommentId: any): Promise<void> => {
    const commentPw = prompt("비밀번호 입력하세요");

    if (!commentPw) {
      alert("비밀번호를 입력하지 않으셨습니다");
      return;
    }

    try {
      const result = await deleteBoardComment({
        variables: { password: commentPw, boardCommentId },
      });
      refetch();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <BoardCommentUI
      writer={writer}
      password={password}
      contents={contents}
      data={data}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeWriter={onChangeWriter}
      onClickSummit={onClickSummit}
      onClickDelete={onClickDelete}
    />
  );
}
