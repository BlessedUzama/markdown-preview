function NotFound() {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </a>
    </main>
  );
}

export default NotFound;
