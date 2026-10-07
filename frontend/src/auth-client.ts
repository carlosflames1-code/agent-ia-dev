// frontend/src/auth-client.ts
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // La URL de tu backend NestJS (ej. http://localhost:3000)
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000"
})

export const { signIn, signUp, signOut, useSession } = authClient;
