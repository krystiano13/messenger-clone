import React from "react";

type func = (e: React.ChangeEvent<HTMLInputElement>) => any;

export function debounce(callBack: func, delay: number) {
  let timeout: number;
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBack(e);
    }, delay);
  };
}
