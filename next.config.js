/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

supabase: {
    client: {
        auth: {
            persistSession: false //or true
        }
    }
  }