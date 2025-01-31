import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <h2>Getting started!</h2>
        <Button>Welcome!</Button>

        <UserButton/>
      </div>
  );
}
