/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: "http://localhost:5000"; // Example environment variable
    // Add your environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  