import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./BoardWrite.queries";
export default function BoardWrite() {
  const [createBoard] = useMutation(CREATE_BOARD);
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
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if(event.target.value && title && contents && writer){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if(event.target.value && writer && contents && password){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if(event.target.value && title && writer && password){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  };
  const onClickSummit = async () => {
    if (!writer) {
      setWriterError("작성자 입력");
    }
    if (!password) {
      setPasswordError("패스워드 입력");
    }
    if (!title) {
      setTitleError("제목 입력");
    }
    if (!contents) {
      setContentsError("내용 입력");
    }
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
        console.log(result);
        console.log(result.data);
        router.push(`${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSummit={onClickSummit}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        isActive={isActive}
      />
    </>
  );
}
