export const storage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  }, //---------------------------------------item преобразуем в JSON и добавляем в localStorage
  getItem: (name) => {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },
};
