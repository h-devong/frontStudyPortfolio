import * as S from "./BoardComment.styles";
import GetDate from "../../../commons/units/getdate";
import { IBoardCommentProps } from "./BoardComment.types";
export default function BoardCommentUI(props: IBoardCommentProps) {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.Header>
          <S.HeaderIcon src="/commentIcon.png" />
          <S.HeaderText>댓글</S.HeaderText>
        </S.Header>
        <S.WriterInfo>
          <S.Writer
            value={props.writer}
            placeholder="이름입력"
            onChange={props.onChangeWriter}
          />
          <S.Password
            value={props.password}
            placeholder="비밀번호 입력"
            onChange={props.onChangePassword}
          />
        </S.WriterInfo>
        <S.CommentArea>
          <S.TextArea
            value={props.contents}
            maxLength={100} // 최대 글자 수 100으로 제한
            placeholder="최대 100자까지 입력 가능합니다"
            onChange={props.onChangeContents}
          />
          <S.TextBottom>
            <S.TextCounter>{props.contents.length}/100</S.TextCounter>
            <S.Summit onClick={props.onClickSummit}>등록하기</S.Summit>
          </S.TextBottom>
        </S.CommentArea>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.Comment key={el._id}>
            <S.Avatar src="/profile.png" />
            <S.CommentInfo>
              <S.CommentWriter>{el.writer}</S.CommentWriter>
              <S.CommentText>{el.contents}</S.CommentText>
              <S.CommentAt>{GetDate(el.createdAt)}</S.CommentAt>
            </S.CommentInfo>
            <S.CommentEditBtn>
              <S.CommentEdit src="/editPencil.png" />
            </S.CommentEditBtn>
            <S.CommentDeleteBtn onClick={() => props.onClickDelete(el._id)}>
              <S.CommentDelete src="/deleteX.png" />
            </S.CommentDeleteBtn>
          </S.Comment>
        ))}
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
