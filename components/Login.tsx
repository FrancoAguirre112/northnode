// Add this line at the top to mark it as a Client Component
"use client";

import Image from "next/image";
import { useState, useRef, useEffect, FormEvent } from "react"; // Import React hooks and types

const Login = () => {
  // State to control the dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // State to hold the error message
  const [error, setError] = useState<string | null>(null);
  // Ref to access the dialog element directly
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Function to open the dialog
  const openDialog = () => {
    setError(null); // Clear previous errors when opening
    setIsDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    // Optional: Clear error when closing if desired
    // setError(null);
  };

  // Effect to programmatically open/close the dialog using its methods
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (isDialogOpen) {
      // Check if it's not already open to prevent errors
      if (!dialogNode.open) {
        dialogNode.showModal(); // Use showModal() for modal behavior (blocks interaction outside)
      }
    } else {
      // Check if it's open before trying to close
      if (dialogNode.open) {
        dialogNode.close();
      }
    }
  }, [isDialogOpen]); // Re-run effect when isDialogOpen changes

  // Handler for the login form submission (placeholder)
  const handleLoginAttempt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setError("No se encontró el usuario"); // Set the required error message
  };

  // Little trick to reserve space for the error message so the layout doesn't jump
  // when the error appears. We render a transparent paragraph when there's no error.
  const renderErrorSpace = () => {
    if (error) {
      return (
        <p className="text-red-500 text-sm text-center min-h-[1.25rem]">
          {error}
        </p>
      ); // Use min-h equal to line-height/text size
    } else {
      return (
        <p className="text-transparent text-sm text-center min-h-[1.25rem]">
          .
        </p>
      ); // Invisible placeholder
    }
  };

  return (
    <>
      {/* The original button now triggers the dialog */}
      <button
        className="p-1"
        aria-label="User profile or login"
        onClick={openDialog} // Call openDialog function on click
      >
        <Image
          src={"/assets/icons/user.svg"}
          alt="User Account"
          width={32}
          height={32}
          className="h-8 w-auto hover:scale-110 hover:cursor-pointer transition-transform duration-200 ease-in-out"
        />
      </button>

      {/* The Dialog Element */}
      <dialog
        ref={dialogRef}
        onClose={closeDialog} // Optional: handle closing via ESC key
        // --- Add centering classes here ---
        className="p-6 rounded-lg shadow-xl bg-[#121620] w-full max-w-sm backdrop:bg-black backdrop:opacity-75
                   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        // --- End of centering classes ---
      >
        {/* Form inside the dialog */}
        <form
          onSubmit={handleLoginAttempt}
          className="flex flex-col gap-4 relative"
        >
          {/* Close Button (Top Right) */}
          <button
            type="button" // Important: type="button" prevents form submission
            onClick={closeDialog}
            className="absolute -top-3 -right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none p-1 hover:cursor-pointer" // Added subtle border/shadow
            aria-label="Close login dialog"
          >
            × {/* HTML entity for 'X' */}
          </button>

          <h2 className="text-xl font-semibold mb-2 text-center text-white">
            Iniciar Sesión
          </h2>

          {/* Username/Email Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="text" // or type="email"
              id="username"
              name="username"
              required // Basic HTML validation
              className="w-full px-3 py-2 border text-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-gray-500"
              placeholder="tu@email.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required // Basic HTML validation
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder:text-gray-500 text-white"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message Display / Placeholder */}
          {renderErrorSpace()}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer transition duration-150 ease-in-out mt-2" // Adjusted margin slightly
          >
            Entrar
          </button>
        </form>
      </dialog>
    </>
  );
};

export default Login;
