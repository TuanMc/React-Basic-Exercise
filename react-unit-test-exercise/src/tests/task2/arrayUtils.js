export function removeItem(items, target) {
  return items.filter(item => item !== target);
}

export async function fetchUsers() {
  const response = await fetch('/api/users');

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
}
