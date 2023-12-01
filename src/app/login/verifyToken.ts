import jwt from 'jsonwebtoken';

export function verifyToken(token: string) {
    const data = jwt.decode(token) as { admin: boolean };
    if (data !== null && data.admin !== null)
        return data.admin;
    return false;
}