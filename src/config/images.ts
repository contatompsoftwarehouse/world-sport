const unsplashUrl = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${width}`;

export const unsplashSrcSet = (id: string, widths: readonly number[]) =>
  widths.map((width) => `${unsplashUrl(id, width)} ${width}w`).join(', ');

export const unsplashSrc = unsplashUrl;