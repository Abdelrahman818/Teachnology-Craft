'use client';

import NextLink from "next/link";

export function Link({ href, className, classes, text, children, ...props }) {
  return (
    <NextLink href={href} className={className ?? classes} {...props}>
      {children ?? text}
    </NextLink>
  );
}

export default Link;
