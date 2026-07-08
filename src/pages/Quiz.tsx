import { useState, useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Check,
  X,
  RotateCcw,
  Award,
  ChevronRight,
  Trophy,
} from "lucide-react";
import { quizData } from "@/data/quiz";
import type { CategoryId } from "@/types";
import { cn } from "@/lib/utils";

interface QuizState {
  status: "intro" | "playing" | "finished";
  currentIndex: number;
  answers: (CategoryId | null)[];
}

type QuizAction =
  | { type: "START" }
  | { type: "ANSWER"; answer: CategoryId }
  | { type: "NEXT" }
  | { type: "RESET" };

const initialState: QuizState = {
  status: "intro",
  currentIndex: 0,
  answers: [],
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START":
      return { status: "playing", currentIndex: 0, answers: [] };
    case "ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentIndex] = action.answer;
      return { ...state, answers: newAnswers };
    }
    case "NEXT":
      if (state.currentIndex + 1 >= quizData.questions.length) {
        return { ...state, status: "finished" };
      }
      return { ...state, currentIndex: state.currentIndex + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const categoryColors: Record<CategoryId, string> = {
  recyclable: "#1E88E5",
  hazardous: "#E53935",
  kitchen: "#43A047",
  other: "#757575",
};

export default function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [selectedOption, setSelectedOption] = useState<CategoryId | null>(null);

  const currentQuestion = quizData.questions[state.currentIndex];
  const totalQuestions = quizData.questions.length;

  const correctCount = state.answers.filter(
    (answer, index) => answer === quizData.questions[index].correctAnswer
  ).length;
  const wrongQuestions = quizData.questions
    .map((q, index) => ({
      question: q,
      userAnswer: state.answers[index],
    }))
    .filter((item) => item.userAnswer !== item.question.correctAnswer);

  const handleSelect = (value: CategoryId) => {
    if (selectedOption) return;
    setSelectedOption(value);
    dispatch({ type: "ANSWER", answer: value });
  };

  const handleNext = () => {
    setSelectedOption(null);
    dispatch({ type: "NEXT" });
  };

  const handleStart = () => {
    setSelectedOption(null);
    dispatch({ type: "START" });
  };

  const handleReset = () => {
    setSelectedOption(null);
    dispatch({ type: "RESET" });
  };

  const score = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="pt-20 min-h-screen">
      {/* 页面头部 */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-forest-50" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-mono tracking-widest uppercase text-amber bg-amber/10 rounded-full">
              INTERACTIVE QUIZ
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              垃圾分类小测验
            </h1>
            <p className="text-lg text-forest-600 max-w-2xl mx-auto">
              10道精选题目，检验你的分类知识储备
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {/* 介绍页 */}
              {state.status === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-10 md:p-12 shadow-card text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-amber/10 rounded-full mb-6">
                    <Trophy className="w-10 h-10 text-amber" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    准备好挑战了吗？
                  </h2>
                  <p className="text-forest-600 mb-8 leading-relaxed">
                    本测试共 {totalQuestions} 道题，涵盖四分类标准与易混物品。
                    完成测试后可查看得分与错题解析。
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                      { label: "题目数量", value: `${totalQuestions}题` },
                      { label: "预计用时", value: "5分钟" },
                      { label: "难度等级", value: "中等" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-4 bg-cream rounded-xl"
                      >
                        <p className="text-xs text-forest-400 mb-1">
                          {item.label}
                        </p>
                        <p className="font-mono font-bold text-forest-700">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleStart}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-forest-700 text-cream rounded-full font-medium shadow-card hover:bg-forest-800 hover:shadow-card-hover transition-all"
                  >
                    <Play className="w-4 h-4" />
                    开始测试
                  </button>
                </motion.div>
              )}

              {/* 答题页 */}
              {state.status === "playing" && currentQuestion && (
                <motion.div
                  key="playing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* 进度条 */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-forest-500">
                        第 {state.currentIndex + 1} / {totalQuestions} 题
                      </span>
                      <span className="text-sm font-mono text-forest-500">
                        {Math.round(
                          ((state.currentIndex + 1) / totalQuestions) * 100
                        )}
                        %
                      </span>
                    </div>
                    <div className="h-2 bg-forest-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-sprout to-forest-600"
                        initial={{ width: 0 }}
                        animate={{
                          width: `${((state.currentIndex + 1) / totalQuestions) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* 题目卡片 */}
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-8 leading-relaxed">
                      {currentQuestion.question}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentQuestion.options.map((option) => {
                        const isSelected = selectedOption === option.value;
                        const isCorrect =
                          option.value === currentQuestion.correctAnswer;
                        const showResult = selectedOption !== null;

                        return (
                          <button
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            disabled={showResult}
                            className={cn(
                              "relative p-5 rounded-2xl border-2 text-left transition-all",
                              !showResult &&
                                "border-forest-100 hover:border-forest-300 hover:bg-cream",
                              showResult &&
                                isCorrect &&
                                "border-green-400 bg-green-50",
                              showResult &&
                                isSelected &&
                                !isCorrect &&
                                "border-red-400 bg-red-50",
                              showResult &&
                                !isCorrect &&
                                !isSelected &&
                                "border-forest-100 opacity-50"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-charcoal">
                                {option.label}
                              </span>
                              {showResult && isCorrect && (
                                <Check className="w-5 h-5 text-green-600" />
                              )}
                              {showResult &&
                                isSelected &&
                                !isCorrect && (
                                  <X className="w-5 h-5 text-red-600" />
                                )}
                            </div>
                            {showResult && isCorrect && (
                              <div
                                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                style={{
                                  backgroundColor:
                                    categoryColors[option.value],
                                }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* 解析 */}
                    <AnimatePresence>
                      {selectedOption && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6"
                        >
                          <div
                            className={cn(
                              "p-4 rounded-xl border",
                              selectedOption === currentQuestion.correctAnswer
                                ? "bg-green-50 border-green-200"
                                : "bg-red-50 border-red-200"
                            )}
                          >
                            <p
                              className={cn(
                                "text-sm font-medium mb-2",
                                selectedOption === currentQuestion.correctAnswer
                                  ? "text-green-700"
                                  : "text-red-700"
                              )}
                            >
                              {selectedOption === currentQuestion.correctAnswer
                                ? "回答正确！"
                                : "回答错误"}
                            </p>
                            <p className="text-sm text-charcoal leading-relaxed">
                              {currentQuestion.explanation}
                            </p>
                          </div>
                          <button
                            onClick={handleNext}
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-700 text-cream rounded-full font-medium hover:bg-forest-800 transition-colors"
                          >
                            {state.currentIndex + 1 >= totalQuestions
                              ? "查看结果"
                              : "下一题"}
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* 结果页 */}
              {state.status === "finished" && (
                <motion.div
                  key="finished"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-card"
                >
                  {/* 得分展示 */}
                  <div className="text-center mb-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber to-amber-light rounded-full mb-4"
                    >
                      <Award className="w-12 h-12 text-white" />
                    </motion.div>
                    <p className="text-sm font-mono text-forest-500 mb-2">
                      测试完成
                    </p>
                    <div className="font-mono text-6xl font-bold text-forest-700 mb-2">
                      {score}
                      <span className="text-2xl">分</span>
                    </div>
                    <p className="text-forest-600">
                      答对 {correctCount} / {totalQuestions} 题
                    </p>
                  </div>

                  {/* 评级 */}
                  <div
                    className={cn(
                      "p-5 rounded-2xl mb-8 text-center",
                      score >= 80
                        ? "bg-green-50 text-green-700"
                        : score >= 60
                          ? "bg-amber/10 text-amber"
                          : "bg-red-50 text-red-600"
                    )}
                  >
                    <p className="font-serif text-lg font-bold mb-1">
                      {score >= 90
                        ? "分类达人！"
                        : score >= 80
                          ? "环保先锋！"
                          : score >= 60
                            ? "继续努力！"
                            : "需要加油！"}
                    </p>
                    <p className="text-sm opacity-80">
                      {score >= 80
                        ? "你已经掌握了垃圾分类的核心知识"
                        : score >= 60
                          ? "基础不错，还有提升空间"
                          : "建议重新学习分类知识"}
                    </p>
                  </div>

                  {/* 错题回顾 */}
                  {wrongQuestions.length > 0 && (
                    <div className="mb-8">
                      <h3 className="font-serif text-lg font-bold text-charcoal mb-4">
                        错题回顾（{wrongQuestions.length}题）
                      </h3>
                      <div className="space-y-3">
                        {wrongQuestions.map(({ question, userAnswer }) => (
                          <div
                            key={question.id}
                            className="p-4 bg-cream rounded-xl border border-forest-100"
                          >
                            <p className="font-medium text-charcoal mb-2">
                              {question.question}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs mb-2">
                              <span className="px-2 py-1 bg-red-50 text-red-600 rounded">
                                你的答案：
                                {question.options.find(
                                  (o) => o.value === userAnswer
                                )?.label || "未作答"}
                              </span>
                              <span className="px-2 py-1 bg-green-50 text-green-600 rounded">
                                正确答案：
                                {question.options.find(
                                  (o) => o.value === question.correctAnswer
                                )?.label}
                              </span>
                            </div>
                            <p className="text-xs text-forest-600 leading-relaxed">
                              {question.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleReset}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest-700 text-cream rounded-full font-medium hover:bg-forest-800 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    再试一次
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
