import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
  signup: async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm_password') as string
    const fullName = formData.get('full_name') as string
    const terms = formData.get('terms')

    if (!email || !password || !confirmPassword || !fullName) {
      return fail(400, {
        error: 'Please fill in all fields',
        email,
        full_name: fullName
      })
    }

    if (password !== confirmPassword) {
      return fail(400, {
        error: 'Passwords do not match',
        email,
        full_name: fullName
      })
    }

    if (password.length < 6) {
      return fail(400, {
        error: 'Password must be at least 6 characters long',
        email,
        full_name: fullName
      })
    }

    if (!terms) {
      return fail(400, {
        error: 'You must agree to the Terms of Service and Privacy Policy',
        email,
        full_name: fullName
      })
    }

    return {
      success: 'Account created successfully! You can now sign in.'
    }
  },
}