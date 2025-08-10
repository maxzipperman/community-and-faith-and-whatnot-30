import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(answers).reduce((acc, [i, v]) => {
    const idx = Number(i);
    return acc + (questions[idx]?.correctIndex === v ? 1 : 0);
  }, 0);

  const onSubmit = () => setSubmitted(true);
  const onReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <Card key={i}>
          <CardContent className="pt-6">
            <div className="font-medium mb-3">{q.question}</div>
            <RadioGroup value={answers[i]?.toString() ?? ""} onValueChange={(val) => setAnswers({ ...answers, [i]: Number(val) })}>
              {q.options.map((opt, idx) => {
                const isCorrect = submitted && idx === q.correctIndex;
                const isSelectedWrong = submitted && answers[i] === idx && idx !== q.correctIndex;
                return (
                  <div key={idx} className="flex items-center space-x-3 py-1">
                    <RadioGroupItem id={`q${i}-opt${idx}`} value={idx.toString()} />
                    <label htmlFor={`q${i}-opt${idx}`} className="text-sm">
                      {opt}
                    </label>
                    {submitted && (
                      isCorrect ? (
                        <Badge variant="secondary">Correct</Badge>
                      ) : isSelectedWrong ? (
                        <Badge variant="destructive">Your answer</Badge>
                      ) : null
                    )}
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      {!submitted ? (
        <Button onClick={onSubmit}>Submit</Button>
      ) : (
        <div className="flex items-center gap-3">
          <div className="text-sm">Score: {score}/{questions.length}</div>
          <Button variant="outline" size="sm" onClick={onReset}>Retake</Button>
        </div>
      )}
    </div>
  );
}
