import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStore = create((set) => ({
  user: [],
  isLoading: false,
  token: null,
  error: null,

  signupUser: async (name, email, password) => {
    try {
      set({ isLoading: true, error: null });

      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("token", data.token)

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);

      set({ user: data.user, isLoading: false, token: data.token });
      return {success: true};
    } catch (error) {
      set({ error: error.message, isLoading: false, });
      throw error;
    }
  },

  checkAuth: async () => {
    try {
      set({ isLoading: true, error: null });

      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");

      if (user && token) {
        set({ user: JSON.parse(user), token, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  loginUser: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "login failed");
      }

      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      await AsyncStorage.setItem("token", data.token);

      set({ user: data.user, isLoading: false });
      return {success: true, message: data.message};
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("token");
      set({ user: [], token: null });
    } catch (error) {
      console.error("Error clearing user data", error);
    }
  }
}));

export default useAuthStore;
