import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <header className="flex items-center gap-6">
          <Image
            src="/cape.png"
            width={120}
            height={120}
            alt="Avatar"
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">Nuttawut Chansanit</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Student ID: 673450036-4</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">Frontend Developer / Student</p>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold text-lg">About</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Age: 20</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Work: progamer</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Contact</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Email: test021@example.com</p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">Phone: +66 0xx-xxx-xxxx</p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Location: Bangkok, Thailand</p>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-semibold text-lg">Projects</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200">
              <li><strong>Project A:</strong> Flippy Bird.</li>
              <li><strong>Project B:</strong> Banksystems</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Skills</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">JavaScript,python,CSS,c#</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Education</h2>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">kku</p>
          </div>
        </section>

        <footer className="mt-6 text-right text-xs text-gray-500">Last updated: June 22, 2026</footer>
      </div>
    </main>
  );
}
