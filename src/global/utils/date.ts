export const parseDate = (input: string) => {
  let parts: any = input.split('-');

  let data = new Date(parts[0], parts[1] - 1, parts[2]); // Note: months are 0-based

  const options: any = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  return data.toLocaleDateString('pr-BR', options).replace(/\./g, '');
};
