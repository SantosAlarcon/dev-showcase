import { AuthUser } from "@/src/domain/entities/user";
import { useState } from "react";

const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    return { loading, user, error, setLoading, setUser, setError };
};

export default useAuth;
