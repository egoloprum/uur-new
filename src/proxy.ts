import { randomUUID } from 'crypto'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SESSION_TIMEOUT = 60 * 30 // 30 minutes
const COOKIE_TIMEOUT = 60 * 60 * 24 * 30 // 1 month

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-current-path', request.nextUrl.pathname)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })

  let visitor_id = request.cookies.get('visitor_id')?.value

  if (!visitor_id) {
    visitor_id = randomUUID()

    response.cookies.set('visitor_id', visitor_id, {
      maxAge: COOKIE_TIMEOUT,
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    })
  }

  const session_id = request.cookies.get('session_id')?.value
  const last_seen = request.cookies.get('session_last_seen')?.value

  const now = Math.floor(Date.now() / 1000)

  let new_session_id = session_id

  if (!session_id || !last_seen) {
    new_session_id = randomUUID()
  } else {
    const diff = now - Number(last_seen)

    if (diff > SESSION_TIMEOUT) {
      new_session_id = randomUUID()
    }
  }

  if (!session_id || new_session_id !== session_id) {
    response.cookies.set('session_id', new_session_id!, {
      maxAge: SESSION_TIMEOUT,
      path: '/',
      httpOnly: true,
      sameSite: 'lax'
    })
  }

  response.cookies.set('session_last_seen', String(now), {
    maxAge: SESSION_TIMEOUT,
    path: '/',
    httpOnly: true,
    sameSite: 'lax'
  })

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
