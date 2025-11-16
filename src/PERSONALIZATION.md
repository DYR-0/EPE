# Quiz Personalization System

## Overview
The Environmental Knowledge Quiz now features an intelligent question selection system that personalizes the quiz experience based on each user's preferences and knowledge level.

## How It Works

### 1. **User Preferences (from Preference Survey)**
Users provide three key pieces of information:
- **Interests**: Selected topics (recycling, energy, water, biodiversity, sustainable, climate)
- **Experience Level**: Beginner, Intermediate, or Advanced
- **Learning Goal**: Learn, practice, share, or challenge knowledge

### 2. **Question Metadata**
Each of the 30 questions is tagged with:
- **Topics**: Which environmental areas it covers (can have multiple tags)
- **Difficulty**: Beginner, intermediate, or advanced level

### 3. **Personalization Algorithm**

The system uses a scoring algorithm to select the best 10 questions:

#### **Scoring System:**
- **+10 points** per matching interest topic
- **+5 points** for exact difficulty match
- **+3 points** for adjacent difficulty (e.g., intermediate question for beginner user)
- **+1 point** for other difficulties

#### **Selection Process:**
1. **First Pass**: Select highly relevant questions (score > 10)
2. **Second Pass**: Fill remaining slots with diverse topics to ensure variety
3. **Third Pass**: Complete selection if needed
4. **Final Step**: Shuffle questions to avoid predictable patterns

### 4. **Question Distribution**

**By Topic:**
- Recycling: 6 questions
- Energy: 6 questions  
- Water: 6 questions
- Biodiversity: 6 questions
- Sustainable: 10 questions
- Climate: 10 questions

**By Difficulty:**
- Beginner: 11 questions
- Intermediate: 13 questions
- Advanced: 6 questions

## Example Scenarios

### Scenario 1: Beginner interested in Recycling & Water
**Selected Questions Will:**
- Prioritize recycling and water topics
- Focus on beginner-level questions
- Include some intermediate questions for growth
- Ensure variety across other environmental topics

### Scenario 2: Advanced learner interested in Climate & Biodiversity
**Selected Questions Will:**
- Emphasize climate and biodiversity questions
- Include advanced and intermediate questions
- Challenge the user with complex concepts
- Still maintain topic diversity

### Scenario 3: No Preferences (First-time user)
**System Will:**
- Select 10 random questions from all 30
- Provide a balanced overview of all topics
- Mix difficulty levels evenly

## Benefits

✅ **More Engaging**: Users see content relevant to their interests
✅ **Appropriate Challenge**: Questions match knowledge level
✅ **Better Learning**: Personalized tips and recommendations
✅ **Varied Experience**: Each quiz can be different based on the selection pool
✅ **Progressive Learning**: Users can adjust preferences as they improve

## Visual Indicators

- ✨ Sparkle icon indicates personalized content on the Welcome screen
- Users see: "Questions personalized based on your interests and experience level"
- Result page provides personalized environmental tips matching their interests

## Technical Implementation

Files involved:
- `/utils/questionSelector.ts` - Personalization algorithm
- `/data/questions.ts` - Question pool with metadata
- `/App.tsx` - Integration and state management
- `/components/Welcome.tsx` - User feedback about personalization
