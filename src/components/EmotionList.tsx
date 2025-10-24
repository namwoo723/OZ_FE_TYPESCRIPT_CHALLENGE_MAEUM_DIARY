import { emotionIcons } from "../data/emotions";
import type { Emotion, EmotionType } from "../types";

interface Props {
  list: Emotion[];
  filter: EmotionType | "all";
  onFilterChange: (val: EmotionType | "all") => void;
}

export default function EmotionList({ list, filter, onFilterChange }: Props) {
  // TODO 1: 필터링된 감정 리스트를 filtered라는 변수에 담아보세요.
  // const filtered = /* filter === 'all' ? list : ...

  return (
    <div className="emotion-list">
      <h2 className="title">나의 감정 기록</h2>

      <div className="filterBar">
        <button
          className={`filterButton ${filter === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
        >
          전체
        </button>
        {Object.keys(emotionIcons).map((key) => (
          <button
            key={key}
            className={`filterButton ${filter === key ? "active" : ""}`}
            onClick={() => onFilterChange(key as EmotionType)}
          >
            {emotionIcons[key as EmotionType]}
          </button>
        ))}
      </div>

      {/* TODO 3: filtered가 비어있으면 '기록 없음', 아니면 리스트 출력 */}
      {/*
        조건부 렌더링을 이용해서 아래와 같이 구현해보세요:
        - filtered.length === 0 이면 <p className="empty">기록이 없습니다!</p>
        - 아니면 <ul>...</ul>
      */}
    </div>
  );
}
