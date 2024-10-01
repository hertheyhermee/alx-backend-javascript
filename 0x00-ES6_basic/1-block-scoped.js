export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // Block-scoped variables
      const task = true;
      const task2 = false;
      // These variables are only accessible within this block
    }
  
    return [task, task2];
  }