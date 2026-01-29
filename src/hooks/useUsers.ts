import { useEffect, useState } from "react";
import { getUsers } from "../services/usersService";
import type { User } from "../types/User";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Flag to prevent state updates if the component unmounts
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        // Only update state if the component is still mounted
        if (isMounted) setUsers(data);
      } catch (err) {
        if (isMounted) setError("Failed to load users. ERR:" + err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function: runs when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  return { users, loading, error };
}