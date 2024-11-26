"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return <div className="flex flex-col justify-center items-center h-full text-2xl">Hello, {user.firstName} welcome to Clerk</div>;
};

export default ClientPage;
