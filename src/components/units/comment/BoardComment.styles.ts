import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  border-top: 1px soild black;
  padding-top: 40px;
`;
export const Wrapper = styled.div`
  padding: 10px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const HeaderIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const WriterInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 54px;
  margin-right: 24px;
  border: 1px solid gray;
  padding: 14px 14px;
`;

export const Password = styled.input`
  width: 180px;
  height: 54px;
  margin-right: 24px;
  border: 1px solid gray;
  padding: 14px 14px;
`;

export const CommentArea = styled.div`
  height: 160px;
  width: 100%;
  border: 1px solid gray;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  height: 108px;
  width: 100%;
  padding: 20px 20px;
  color: gray;
  border: none;
  border-bottom: 1px solid gray;
  margin: 0px;
`;

export const TextBottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;

export const TextCounter = styled.div`
  padding-left: 20px;
`;

export const Summit = styled.button`
  width: 91px;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;

export const Comment = styled.div`
  /* width: 120px; */
  padding-top: 10px;
  display: flex;
  border-bottom: 1px solid gray;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentInfo = styled.div`
  margin-left: 12px;
  display: flex;
  margin-right: auto;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const CommentWriter = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const CommentText = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const CommentAt = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: gray;
  text-align: center;
`;

export const CommentDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const CommentEditBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CommentDelete = styled.img``;

export const CommentEdit = styled.img``;
