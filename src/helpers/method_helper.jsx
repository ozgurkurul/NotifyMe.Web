// String'in null veya boş olup olmadığını kontrol eden yardımcı fonksiyon
export const isNullOrEmpty = (str) => {
  return !str || str.trim().length === 0;
};

// Nesnenin boş olup olmadığını kontrol eden yardımcı fonksiyon
export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};