import { useState } from "react";
import EmotionForm from "./components/EmotionForm";
import EmotionList from "./components/EmotionList";
import type { Emotion, EmotionType } from "./types";
import "./App.css";

function App() {
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [filter, setFilter] = useState<EmotionType | "all">("all");

  const handleAddEmotion = (newEmotion: Emotion): void => {
    setEmotions((prev) => [newEmotion, ...prev]);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">❤️ 마음 한 칸 일기 📒</h1>
      <EmotionForm onAdd={handleAddEmotion} />
      <EmotionList list={emotions} filter={filter} onFilterChange={setFilter} />
    </div>
  );
}

export default App;
