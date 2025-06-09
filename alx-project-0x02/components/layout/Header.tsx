import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </>
  );
};

export default Header;
