export default function GetDate(dateString: string): string {
  const date = new Date(dateString);

  // 연도, 월, 일 추출
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  // yyyy-mm-dd 형식으로 반환
  return `${year}-${month}-${day}`;
}
