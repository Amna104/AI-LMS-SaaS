"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

interface NavItemsProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

const NavItems = ({ mobile = false, onLinkClick }: NavItemsProps) => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const navItems = [
    { label: "Home", href: "/" },
    ...(isSignedIn ? [{ label: "Dashboard", href: "/dashboard" }] : []),
    { label: "Companions", href: "/companions" },
    ...(isSignedIn ? [{ label: "My Journey", href: "/my-journey" }] : []),
  ];

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4">
        {navItems.map(({ label, href }) => (
          <Link
            href={href}
            key={label}
            onClick={onLinkClick}
            className={cn(
              "nav-link-mobile py-3 px-4 rounded-lg transition-all duration-300 hover:bg-orange-50",
              pathname === href && "bg-orange-100 text-primary font-semibold"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-6">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "nav-link relative py-2 transition-colors duration-300",
            pathname === href && "text-primary font-semibold active-link"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
