const LC_ACCESS_TOKEN = 'access_token';

export const getSavedToken = (): string | null => {
  return localStorage.getItem(LC_ACCESS_TOKEN);
};
export const saveAccessToken = (token: string) => localStorage.setItem(LC_ACCESS_TOKEN, token);
export const clearAccessToken = () => localStorage.removeItem(LC_ACCESS_TOKEN);
