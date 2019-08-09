export default function validateTask(task) {
  const errors = [];
  if (!task.title) {
    errors.push({ field: "title", msg: "" });
  }
  return errors;
}
