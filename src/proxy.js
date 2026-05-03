import { NextResponse } from 'next/server'
import { authClient } from './app/lib/auth-client';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const { data, error, isPending } = await authClient.useSession();
    console.log(data);
    if (!data?.session?.id) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: '/products/:id',
}