enum Environment {
  BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:5555",
}

export default Environment;
