# Student Test

This project provides a flexible student test system, designed to be easily customizable for different questions, answers, and evaluation models. **Note:** The current version is in Spanish only.

## How It Works

This test uses a **score-based model**, meaning there are no strictly "correct" answers. Instead, each answer is classified as:

- **Perfect**
- **Regular**
- **Bad**

Each classification is associated with a score. At the end of the test, a total score is calculated and used to determine the final result.

## Flexibility & Customization

You can modify this project without needing to write new logic or functions — unless you want to change how the test model works.

### What you can modify easily:
- Questions
- Answers
- Results

These are located in:
- `src/assets/util/Info/`

If you want to add images to questions or answers, you'll need to update the type definitions:
- `src/assets/util/Types/Question.ts`
- `src/assets/util/Types/Answer.ts`

### What requires deeper changes:

If you want to change the test logic (i.e. the test model), you will need to edit the following files:

- `src/assets/util/Functions/getResult.ts`
- `src/assets/util/Info/QA.ts`
- `src/(Pages)/Questions/page.tsx`
- `src/(Pages)/Questions/Result/page.tsx`

> These changes require both TypeScript and React knowledge.
