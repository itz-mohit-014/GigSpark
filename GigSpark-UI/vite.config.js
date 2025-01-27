import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  // typescript: {
  //   ignoreBuildErrors: true
  // },
  // eslint:{
  //   ignoreDuringBuilds:true
  // },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api/v1":{
        target: "https://gigspark.onrender.com",
        // target: "http://localhost:4000", // backend server
        changeOrigin: true,
        secure: false,
      },
    },
  }
});