// src/components/Loader.tsx

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full"></span>
    </div>

  );
}

export default Loader;
