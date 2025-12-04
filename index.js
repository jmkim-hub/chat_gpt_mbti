const questions = [
    // E / I
    {
        id: 1,
        text: "새로운 사람들과 금방 어울리는 편인가요?",
        yes: "E",
        no: "I"
    },
    {
        id: 2,
        text: "혼자 시간을 보내는 것이 더 편안하다고 느끼나요?",
        yes: "I",
        no: "E"
    },
    {
        id: 3,
        text: "여럿이 함께하는 활동이 에너지를 준다고 느끼나요?",
        yes: "E",
        no: "I"
    },

    // S / N
    {
        id: 4,
        text: "설명이나 정보를 들을 때 세부적인 내용이 더 잘 들어오나요?",
        yes: "S",
        no: "N"
    },
    {
        id: 5,
        text: "상황을 보며 자연스럽게 가능성이나 흐름을 떠올리는 편인가요?",
        yes: "N",
        no: "S"
    },
    {
        id: 6,
        text: "직접 경험한 사실을 중심으로 판단하는 편인가요?",
        yes: "S",
        no: "N"
    },

    // T / F
    {
        id: 7,
        text: "결정을 내릴 때 감정보다 논리를 우선하는 편인가요?",
        yes: "T",
        no: "F"
    },
    {
        id: 8,
        text: "타인의 기분 변화를 빠르게 눈치채는 편인가요?",
        yes: "F",
        no: "T"
    },
    {
        id: 9,
        text: "갈등 상황에서 개인 감정보다 해결 방법을 먼저 생각하나요?",
        yes: "T",
        no: "F"
    },

    // J / P
    {
        id: 10,
        text: "계획을 세우고 그 계획대로 움직일 때 더 안정감을 느끼나요?",
        yes: "J",
        no: "P"
    },
    {
        id: 11,
        text: "일의 순서보다는 상황에 따라 유연하게 움직이는 편인가요?",
        yes: "P",
        no: "J"
    },
    {
        id: 12,
        text: "마감 기한이 멀어도 미리 준비하는 편인가요?",
        yes: "J",
        no: "P"
    }
];
// HTML 요소 가져오기
const questionElement = document.getElementById("question");
const questionNumberElement = document.getElementById("question-number");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// 현재 질문 인덱스 (0부터 시작)
let currentQuestionIndex = 0;

// 사용자의 답변을 저장할 배열 (각 질문에서 선택된 알파벳이 들어감)
const answers = [];

// 화면에 질문과 질문 번호를 표시하는 함수
function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // 질문 내용 표시
    questionElement.textContent = currentQuestion.text;

    // 질문 번호 표시 (요소가 있을 때만)
    if (questionNumberElement) {
        questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
    }
}

// 사용자가 답변을 클릭했을 때 실행되는 함수
function handleAnswer(answerType) {
    const currentQuestion = questions[currentQuestionIndex];

    // answerType은 "yes" 또는 "no"
    const selectedType = currentQuestion[answerType]; // 예: "E", "I", "S" ...

    // 선택된 알파벳을 배열에 저장
    answers.push(selectedType);

    // 마지막 질문인지 확인
    if (currentQuestionIndex < questions.length - 1) {
        // 다음 질문으로 이동
        currentQuestionIndex++;
        renderQuestion();
    } else {
        // 마지막 질문까지 모두 답했을 때
        // // 각 알파벳 개수 세기
const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
};

answers.forEach((type) => {
    if (counts[type] !== undefined) {
        counts[type]++;
    }
});

// 각 지표별로 더 많이 나온 알파벳 선택
const ei = counts.E >= counts.I ? "E" : "I";
const sn = counts.S >= counts.N ? "S" : "N";
const tf = counts.T >= counts.F ? "T" : "F";
const jp = counts.J >= counts.P ? "J" : "P";

// 최종 MBTI 결과 문자열
const mbtiResult = ei + sn + tf + jp;

// 로컬스토리지에 결과 저장
localStorage.setItem("mbti_result", mbtiResult);

// 결과 페이지로 이동
window.location.href = "result.html";
        console.log("모든 질문에 답변 완료:", answers);
        // 예시:
        // const result = calculateMbtiResult(answers);
        // window.location.href = `result.html?type=${result}`;
    }
}

// "예" 버튼 클릭 이벤트
yesButton.addEventListener("click", function () {
    handleAnswer("yes");
});

// "아니오" 버튼 클릭 이벤트
noButton.addEventListener("click", function () {
    handleAnswer("no");
});

// 페이지가 로드되면 첫 질문을 먼저 표시
renderQuestion();
