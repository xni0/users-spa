import type { User } from "../types/User";

const API_URL = "http://127.0.0.1:8000/users";

export async function getUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error fetching users");
    return response.json();
}

export async function getUserById(userId: number): Promise<User | null> {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) throw new Error("Error fetching user");
    return response.json();
}

// --- NEW FUNCTION ---
export async function createUser(user: Omit<User, "id">): Promise<User> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // We send a dummy ID (0), the backend will overwrite it
    body: JSON.stringify({ ...user, id: 0 }),
  });

  if (!response.ok) {
    throw new Error("Error creating user");
  }

  return response.json();
}