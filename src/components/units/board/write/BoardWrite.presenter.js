import * as S from "./BoardWrite.styles";
export default function BoardWriteUI(props) {
  return (
    <>
      <S.BoardWrapper>
        <S.BoardTitle>게시물 등록</S.BoardTitle>
        <S.TopWrapper>
          <S.WriterWrapper>
            <S.Label>작성자</S.Label>
            <S.WriterInput
              placeholder="이름을 작성해주세요"
              onChange={props.onChangeWriter}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.WriterWrapper>
          <S.PasswordWrapper>
            <S.Label>비밀번호</S.Label>
            <S.PasswordInput
              placeholder="비밀번호을 작성해주세요"
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.PasswordWrapper>
        </S.TopWrapper>
        <S.ElementWrapper>
          <S.Label>제목</S.Label>
          <S.TitleInput
            placeholder="제목을 작성해주세요"
            onChange={props.onChangeTitle}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.Label>내용</S.Label>
          <S.ContentInput
            placeholder="내용을 작성해주세요"
            onChange={props.onChangeContents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.Label>주소</S.Label>
          <S.ZipCodeWrapper>
            <S.ZipCodeInput placeholder="07250" />
            <S.ZipCodeButton>우편번호 검색</S.ZipCodeButton>
          </S.ZipCodeWrapper>
          <S.AddressOneInput />
          <S.AddressTwoInput />
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.Label>유튜브 링크</S.Label>
          <S.YoutubeInput placeholder="링크를 입력하세요" />
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.Label>사진 첨수</S.Label>
          <S.PictureWrapper>
            <S.PictureButton>+</S.PictureButton>
            <S.PictureButton>+</S.PictureButton>
            <S.PictureButton>+</S.PictureButton>
          </S.PictureWrapper>
        </S.ElementWrapper>
        <S.ElementWrapper>
          <S.Label>메인 설정</S.Label>
          <S.ThumbnailWrapper>
            <S.ThumbnailRadio type="radio" name="thumbnail" value="youtube" />{" "}
            유튜브
            <S.ThumbnailRadio
              type="radio"
              name="thumbnail"
              value="picture"
            />{" "}
            사진
          </S.ThumbnailWrapper>
        </S.ElementWrapper>
        <S.SummitButton onClick={props.onClickSummit}
        isActive={props.isActive}
        disabled={!props.isActive}
        >등록하기</S.SummitButton>
      </S.BoardWrapper>
    </>
  );
}
