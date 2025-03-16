import FacilitySignupForm from "@/components/facility-signup-form"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Facility Signup</h1>
      <FacilitySignupForm />
    </main>
  )
}

