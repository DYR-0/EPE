import { Question } from "../data/questions";
import { UserPreferences } from "./userDataManager";

/**
 * Selects and sorts quiz questions based on user preferences
 * @param allQuestions - All available questions
 * @param preferences - User's learning preferences
 * @param count - Number of questions to select (default 10)
 * @returns Array of personalized questions
 */
export function selectPersonalizedQuestions(
  allQuestions: Question[],
  preferences: UserPreferences | null,
  count: number = 10
): Question[] {
  // If no preferences, return random questions
  if (!preferences) {
    return getRandomQuestions(allQuestions, count);
  }

  const { interests, experience } = preferences;

  // Score each question based on relevance
  const scoredQuestions = allQuestions.map(question => {
    let score = 0;

    // Match interests (highest priority)
    const interestMatches = question.topics.filter(topic => 
      interests.includes(topic)
    ).length;
    score += interestMatches * 10;

    // Match difficulty level
    if (question.difficulty === experience) {
      score += 5; // Exact match
    } else if (
      (experience === 'beginner' && question.difficulty === 'intermediate') ||
      (experience === 'intermediate' && (question.difficulty === 'beginner' || question.difficulty === 'advanced')) ||
      (experience === 'advanced' && question.difficulty === 'intermediate')
    ) {
      score += 3; // Adjacent difficulty
    } else {
      score += 1; // Other difficulties still included but lower priority
    }

    return { question, score };
  });

  // Sort by score (descending)
  scoredQuestions.sort((a, b) => b.score - a.score);

  // Ensure variety by grouping by topics
  const selectedQuestions: Question[] = [];
  const usedTopics = new Set<string>();

  // First pass: Get highly relevant questions (score > 10)
  for (const { question, score } of scoredQuestions) {
    if (selectedQuestions.length >= count) break;
    if (score > 10) {
      selectedQuestions.push(question);
      question.topics.forEach(topic => usedTopics.add(topic));
    }
  }

  // Second pass: Fill remaining slots with diverse questions
  for (const { question, score } of scoredQuestions) {
    if (selectedQuestions.length >= count) break;
    if (!selectedQuestions.includes(question)) {
      // Prefer questions with topics not yet covered
      const hasNewTopic = question.topics.some(topic => !usedTopics.has(topic));
      if (hasNewTopic || selectedQuestions.length >= count - 2) {
        selectedQuestions.push(question);
        question.topics.forEach(topic => usedTopics.add(topic));
      }
    }
  }

  // Third pass: Fill any remaining slots
  for (const { question } of scoredQuestions) {
    if (selectedQuestions.length >= count) break;
    if (!selectedQuestions.includes(question)) {
      selectedQuestions.push(question);
    }
  }

  // Shuffle to avoid predictable order
  return shuffleArray(selectedQuestions.slice(0, count));
}

/**
 * Get random questions from the pool
 */
function getRandomQuestions(questions: Question[], count: number): Question[] {
  const shuffled = shuffleArray([...questions]);
  return shuffled.slice(0, Math.min(count, questions.length));
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get question distribution summary
 */
export function getQuestionSummary(questions: Question[]): {
  byTopic: Record<string, number>;
  byDifficulty: Record<string, number>;
} {
  const byTopic: Record<string, number> = {};
  const byDifficulty: Record<string, number> = {};

  questions.forEach(question => {
    question.topics.forEach(topic => {
      byTopic[topic] = (byTopic[topic] || 0) + 1;
    });
    byDifficulty[question.difficulty] = (byDifficulty[question.difficulty] || 0) + 1;
  });

  return { byTopic, byDifficulty };
}
