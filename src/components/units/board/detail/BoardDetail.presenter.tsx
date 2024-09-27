import * as S from "./BoardDetail.styles";
import { IBoardDetailProps } from "./boardDetail.types";
export default function BoardDetailUI(props: IBoardDetailProps) {
  return (
    <>
      <S.Wrapper>
        <S.CardWrapper>
          <S.Header>
            <S.Avartar src="/profile.png" />
            <S.WriterWrapper>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard.createdAt}</S.CreatedAt>
            </S.WriterWrapper>
            <S.DetailsWrapper>
              <S.LinkImg src="/link.png" />
              <S.LocationImg src="/location.png" />
            </S.DetailsWrapper>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard.title}</S.Title>
            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          </S.Body>
        </S.CardWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickList}>목록으로</S.Button>
          <S.Button onClick={props.onClickEdit}>수정하기</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
        </S.BottomWrapper>
      </S.Wrapper>
    </>
  );
}
