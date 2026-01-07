import React, { useState } from "react";
import { emotionIcons } from "../data/emotions";
import type { Emotion, EmotionType } from "../types";

interface Props {
  onAdd: (newEmotion: Emotion) => void;
}

export default function EmotionForm({ onAdd }: Props) {
  const [selected, setSelected] = useState<EmotionType>("happy");
  const [note, setNote] = useState("");

  // TODO 4: 제출 시 감정 객체를 만들어 전달하세요
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 아래 구조를 참고해서 Emotion 객체를 완성해보세요.
    // const newEmotion: Emotion = {
    //    id: ...,
    //    emotion: ...,
    //    note: ...,
    //    date: ...,
    // };

    // 일기를 기록하고, 입력을 초기화하세요.
    // HINT: onAdd, setNote
    const newEmotion: Emotion = {
      id: Date(),
      emotion: selected,
      note,
      date: Date(),
    }
    onAdd(newEmotion);
    setNote("");
  };


  return (
    <form onSubmit={handleSubmit} className="emotion-form">
      <h2>오늘의 감정을 기록해보세요! </h2>
      <div className="emotion-options">
        {Object.entries(emotionIcons).map(([type, icon]) => {
          const id = `emotion-${type}`;
          return (
            <React.Fragment key={type}>
              <input
                type="radio"
                id={id}
                value={type}
                checked={selected === type}
                onChange={() => setSelected(type as EmotionType)}
              />
              <label htmlFor={id}>{icon}</label>
            </React.Fragment>
          );
        })}
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="오늘 하루 어땠나요?"
      />

      <button type="submit">기록하기</button>
    </form>
  );
}
