export const getSubStringFromTo = (str: string, from: number, to: string) =>
  str.substring(from, str.indexOf(to));

export const getSkipFromPageAndLimit = (page: number, limit: number): number => {
  return (page - 1) * limit;
}

