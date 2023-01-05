const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://www.javascriptes.com/api/tutoriales"
    : "https://www.javascriptes.com/api/tutoriales";

export default baseURL;
