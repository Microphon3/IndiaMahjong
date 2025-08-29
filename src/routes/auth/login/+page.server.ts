import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
  signin: async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return fail(400, {
        error: 'Please fill in all fields',
        email
      })
    }

    // Simple validation - in real app this would check against database
    if (password.length < 6) {
      return fail(400, {
        error: 'Invalid email or password',
        email
      })
    }

    // Redirect to dashboard on successful "login"
    redirect(303, '/dashboard')
  },
}