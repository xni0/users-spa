import { useEffect, useState } from "react";
import { getUserById } from "../services/usersService";
import type { User } from "../types/User";

export function useUser(userId: string | undefined) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      if (!userId) {
        setError("User ID not provided");
        setLoading(false);
        return;
      }

      const id = Number(userId);

      if (Number.isNaN(id)) {
        setError("Invalid user ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getUserById(id);
        if (isMounted) setUser(data);
      } catch (err) {
        if (isMounted) setError("Failed to load user details. ERR: " + err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return { user, loading, error };
}