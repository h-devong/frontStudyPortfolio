import GetDate from '../../../../commons/units/getdate';
import * as S from './BoardList.styles';
export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.ListTable>
        <S.TableRow>
          <S.HeaderLabel>번호</S.HeaderLabel>
          <S.HeaderLabel>제목</S.HeaderLabel>
          <S.HeaderLabel>작성자</S.HeaderLabel>
          <S.HeaderLabel>날짜</S.HeaderLabel>
        </S.TableRow>
        {props.data?.fetchBoards.map((el) => (
          <S.TableRow key={el._id} onClick={() => props.onClickRow(el._id)}>
            <S.TableLabel>{el._id.slice(0, 4)}</S.TableLabel>
            <S.TableLabel>{el.title}</S.TableLabel>
            <S.TableLabel>{el.writer}</S.TableLabel>
            <S.TableLabel>{GetDate(el.createdAt)}</S.TableLabel>
          </S.TableRow>
        ))}
      </S.ListTable>
      <S.NewButton>
        <S.Image src="/pencil.png" />
        게시물 등록하기
      </S.NewButton>
    </S.Wrapper>
  );
}
