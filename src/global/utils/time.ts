export const parseTime = (date: string) => {
  let parts: any = date.split(' ');
  return parts[1].substr(0, 5);
};
