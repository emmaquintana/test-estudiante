# Flexibility

This project is very flexible to be modified; it doesn't need to create new functions or related. But if you want to change questions, answers, and possible results, obviously you'll have to modify some files.

The only case you should modify (and create) logic, is changing the test model (currently in score model)

### <i>How this test works</i>

<b>The test works with a score model</b>, this means, there's no a CORRECT answer. An answer will be classified by Perfect, Regular or Bad. For each of these classifications, there's a score. The score is calculated at the end of the test, and with that, result is displayed.

# Modification

Most important files is located in <i>src/assets/util/Info/</i>. There you can modify questions, answers and results. 
If you want to add images to questions/answers or something like that, you'll have to modify Question type and Answer type. Both are located in src/assets/util/Types.

If you want to change test model, you'll have to modify some files (and good luck):
- src/assets/util/Functions/getResult
- src/assets/util/Info/QA.ts
- src/(Pages)/Questions/page.tsx
- src/(Pages)/Questions/Result/page.tsx
