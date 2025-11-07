import Link from "next/link";
import Image from "next/image";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-muted min-h-svh md:p-10">
      <div className="flex flex-col w-full max-w-sm gap-6">
        <Link
          href="/"
          className="flex items-center self-center gap-2 font-medium"
        >
          <Image src="/logos/logo.svg" alt="Nodebase" width={30} height={30} />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  );
};
