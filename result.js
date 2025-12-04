document.addEventListener("DOMContentLoaded", () => {
    const resultElement = document.getElementById("result");
    const restartButton = document.getElementById("restart-button");

    // 로컬스토리지에서 mbti_result 가져오기
    const mbtiResult = localStorage.getItem("mbti_result");

    if (mbtiResult) {
        // 결과가 있을 때
        resultElement.textContent = `${mbtiResult}입니다!`;
    } else {
        // 결과가 없을 때
        resultElement.textContent = "아직 테스트를 진행하지 않았습니다!";
        restartButton.textContent = "테스트 하러 가기";
    }
});
