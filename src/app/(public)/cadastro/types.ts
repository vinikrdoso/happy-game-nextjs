// Form types for signup page

export type Platform = "pc" | "console" | "mobile" | "retro";

export type Genre = "rpg" | "indie" | "fps" | "sports" | "moba" | "other";

export interface SignupFormData {
  // Step 1: Personal Information
  fullName: string;
  nickname: string;
  email: string;
  phone: string;

  // Step 2: Password
  password: string;
  confirmPassword: string;

  // Step 3: Gaming Preferences
  platform: Platform | "";
  genres: Genre[];

  // Step 4: Finalization
  message: string;
  acceptTerms: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  nickname?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  platform?: string;
  genres?: string;
  message?: string;
  acceptTerms?: string;
}

export type FormStep = 1 | 2 | 3 | 4;
