import type { User } from "../types/User";

const API_URL = "http://127.0.0.1:8000/users";

// Fetches the list of all users
export async function getUsers(): Promise<User[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  return response.json();
}

// Fetches a single user by ID
export async function getUserById(userId: number): Promise<User | null> {
  const response = await fetch(`${API_URL}/${userId}`);
  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return response.json();
}