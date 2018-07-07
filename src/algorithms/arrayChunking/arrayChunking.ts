export const arrayChunking = (array: any[], size: number): any[][] => {
  const chunked: any[] = [];

  for (let element of chunked) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
};
