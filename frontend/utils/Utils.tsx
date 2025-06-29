// Email validation function
export const validateEmail = (email: string) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

export const removeLineBreaks = (str: string) => {
  return str.replace(/\\n/g, " ");
};

export const getIsVideo = (url: string) => {
  const videoExtensions = [
    ".mp4",
    ".mov",
    ".avi",
    ".webm",
    ".mkv",
    ".flv",
    ".wmv",
    ".ogv",
    ".oga",
    ".ogx",
    ".m4v",
    ".m4a",
    ".m4p",
    ".m4b",
    ".m4r",
  ];
  const isVideo = videoExtensions.some((ext) => url?.includes(ext));
  return isVideo;
};
