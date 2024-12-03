export function validateId(id) {
  if (!Number.isInteger(id)) {
    throw new Error('Invalid ID');
  }
}
