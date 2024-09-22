export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setCookie(name: string, value: string, options: any) {
  const coockieOptions = {
    path: "/",
    sameSite: "strict",
    ...options,
  };

  if (coockieOptions.expires instanceof Date) {
    coockieOptions.expires = coockieOptions.expires.toUTCString();
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}`;

  for (const optionKey in coockieOptions) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = coockieOptions[optionKey];
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}
