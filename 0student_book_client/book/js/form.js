//전역변수
const API_BASE_URL = "http://localhost:8080";

//DOM 엘리먼트 가져오기
const bookForm = document.getElementById("bookForm");
const bookTableBody = document.getElementById("bookTableBody");

//Document Load 이벤트 처리하기
document.addEventListener("DOMContentLoaded", function () {
loadBooks();
});

//Form Submit 이벤트 처리하기
bookForm.addEventListener("submit", function (event) {
    //기본으로 설정된 Event가 동작하지 않도록 하기 위함
    event.preventDefault();
    console.log("Form 제출 되었음...");

    //FormData 객체생성 <form>엘리먼트를 객체로 변환
    const bookFormData = new FormData(bookForm);
    // bookFormData.forEach((value, key) => {
    //     console.log(key + ' = ' +  value);
    // });

    //사용자 정의 Book 객체생성 ( 공백 제거 )
    const bookData = {
        title: bookFormData.get("title").trim(),
        isbn: bookFormData.get("isbn").trim(),
        author: bookFormData.get("author").trim(),
        price: bookFormData.get("price").trim(),
        publishDate: bookFormData.get("publishDate"),
    };         

    //유효성 체크하기
    if (!validateBook(bookData)) {
        //검증체크 실패하면 리턴하기
        return;
    }
    //유효한 데이터 출력하기
    console.log(bookData);
});

//데이터 유효성을 체크하는 함수
function validateBook(book) {// 필수 필드 검사
    if (!book.title) {
        alert("제목을 입력해주세요.");
        return false;
    }

    if (!book.isbn) {
        alert("일련번호를 입력해주세요.");
        return false;
    }

    if (!book.price) {
        alert("가격을 입력해주세요.");
        return false;
    }

    if (!book.author) {
        alert("저자를 입력해주세요.");
        return false;
    }

    if (!book.publishDate) {
        alert("출판일자를 입력해주세요.");
        return false;
    }
    // 일련번호호 형식 검사 (예: 영문과 숫자 조합)
    const isbnPattern = /^[B-Za-z0-9]+$/;
    if (!isbnPattern.test(book.isbn)) {
        alert("일련번호는는 영문과 숫자만 입력 가능합니다.");
        return false;
    }

    return true;
}//validateBook


//학생목록 로드하는 함수
function loadBooks() {
console.log("도서 목록 로드 중.....");
}