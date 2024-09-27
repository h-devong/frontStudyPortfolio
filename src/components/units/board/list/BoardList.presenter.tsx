import GetDate from "../../../../commons/units/getdate";
import * as S from "./BoardList.styles";
import { IBoardListProps } from "./BoardList.types";
export default function BoardListUI(props: IBoardListProps) {
  return (
    <S.Wrapper>
      <S.ListTable>
        <S.TableRow>
          <S.HeaderLabel>번호</S.HeaderLabel>
          <S.HeaderLabel>제목</S.HeaderLabel>
          <S.HeaderLabel>작성자</S.HeaderLabel>
          <S.HeaderLabel>날짜</S.HeaderLabel>
        </S.TableRow>
        {props.data?.fetchBoards.map((el: any) => (
          <S.TableRow key={el._id} onClick={() => props.onClickRow(el._id)}>
            <S.TableLabel>{el._id.slice(0, 4)}</S.TableLabel>
            <S.TableLabel>{el.title}</S.TableLabel>
            <S.TableLabel>{el.writer}</S.TableLabel>
            <S.TableLabel>{GetDate(el.createdAt)}</S.TableLabel>
          </S.TableRow>
        ))}
      </S.ListTable>
      <S.NewButton onClick={props.onClickNew}>
        <S.Image src="/pencil.png" />
        게시물 등록하기
      </S.NewButton>
    </S.Wrapper>
  );
}
