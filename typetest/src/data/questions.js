const questions = [
  {
    question: "내가 즐겨 찾는 카페 유형은?",
    answers: [
      { text: "조용하고 나만 알 것 같은 분위기의 카페", type: "I" },
      { text: "SNS에서 유명한 핫 플레이스 카페", type: "E" },
    ],
  },
  {
    question: "자주 가던 카페에 신메뉴가 생겼다면?",
    answers: [
      { text: "음..신기하지만, 그냥 먹던거 먹는다", type: "S" },
      { text: "신메뉴? 무적권 먹어봐야지! 바로 시킨다", type: "N" },
    ],
  },
  {
    question: "쨍그랑! 누군가 음료 컵을 깨뜨렸다. 나의 반응은?",
    answers: [
      { text: "다른 사람들이 밟으면 위험할 것 같은데", type: "T" },
      { text: "저 사람 안다쳤을까?", type: "F" },
    ],
  },
  {
    question: "가려던 카페가 갑자기 오늘 휴무라고 한다면?",
    answers: [
      { text: "휴무? 그럼 다른데 가지 뭐~", type: "P" },
      { text: "뭐야, 왜 갑자기 휴무일이야?! ", type: "J" },
    ],
  },
  {
    question: '"또 오셨네요?" 카페 직원이 말을 걸때 나는?',
    answers: [
      { text: "오 저 기억하시네요?!(반갑)", type: "E" },
      { text: "아 네 ㅎㅎ…(당황)", type: "I" },
    ],
  },
  {
    question: '"커피 무슨 맛으로 먹어?" 라는 질문에 나의 대답은?',
    answers: [
      { text: "커피가 커피맛이지 뭐", type: "S" },
      { text: "커피는 생명수지 안마시면 나 죽어..", type: "N" },
    ],
  },
  {
    question: "내가 평소의 먹던 커피의 맛이 아니라면?",
    answers: [
      { text: "오늘 커피 맛이 왜이러지?", type: "T" },
      { text: "오늘 내 입 맛이 이상한가?", type: "F" },
    ],
  },
  {
    question: "카페를 찾던 중 괜찮아 보이는 카페를 발견했다면?",
    answers: [
      { text: "들어가기 전 리뷰 부터 찾아본다", type: "J" },
      { text: "일단 들어가본다", type: "P" },
    ],
  },
  {
    question: "주문한 음료가 다르게 나왔다면?",
    answers: [
      { text: "이거 주문 안했는데요? 라고 말하고 다시 받는다", type: "E" },
      { text: "이거 아닌데… 속으로 생각하고 그냥 마신다", type: "I" },
    ],
  },
  {
    question: "주말에 카페에서 근황토크 중 나는?",
    answers: [
      { text: "이번 주 있었던 일을 조목조목 이야기 한다", type: "S" },
      { text: "가장 먼저 떠오르는 일을 이야기한다", type: "N" },
    ],
  },
  {
    question: "배가부른데 친구가 디저트를 사겠다고 한다면?",
    answers: [
      { text: "배부르니 거절한다", type: "T" },
      { text: "배부르지만 일단 주문한다", type: "F" },
    ],
  },
  {
    question: "근처에서 원두 박람회 하는데 같이 가자고 한다면? ",
    answers: [
      { text: "잠시만 (오늘 할일부터 확인한다)", type: "J" },
      { text: "오 좋아! 가자! (일단 간다)", type: "P" },
    ],
  },
]

export default questions
