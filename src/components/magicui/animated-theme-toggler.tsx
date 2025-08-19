// "use client";

// import { Moon, SunDim } from "lucide-react";
// import { useState, useRef } from "react";
// import { flushSync } from "react-dom";
// import { cn } from "@/lib/utils";

// type props = {
//   className?: string;
// };

// export const AnimatedThemeToggler = ({ className }: props) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
//   const buttonRef = useRef<HTMLButtonElement | null>(null);
//   const changeTheme = async () => {
//     if (!buttonRef.current) return;

//     await document.startViewTransition(() => {
//       flushSync(() => {
//         const dark = document.documentElement.classList.toggle("dark");
//         setIsDarkMode(dark);
//       });
//     }).ready;

//     const { top, left, width, height } =
//       buttonRef.current.getBoundingClientRect();
//     const y = top + height / 2;
//     const x = left + width / 2;

//     const right = window.innerWidth - left;
//     const bottom = window.innerHeight - top;
//     const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

//     document.documentElement.animate(
//       {
//         clipPath: [
//           `circle(0px at ${x}px ${y}px)`,
//           `circle(${maxRad}px at ${x}px ${y}px)`,
//         ],
//       },
//       {
//         duration: 700,
//         easing: "ease-in-out",
//         pseudoElement: "::view-transition-new(root)",
//       },
//     );
//   };
//   return (
//     <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
//       {isDarkMode ? <SunDim /> : <Moon />}
//     </button>
//   );
// };

"use client";

import { Moon, Sun, SunDim } from "lucide-react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const isDarkMode = theme === "dark";

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const newTheme = isDarkMode ? "light" : "dark";

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <Button
      ref={buttonRef}
      variant={"ghost"}
      size={"icon"}
      onClick={changeTheme}
      className={cn(className, "cursor-pointer")}
    >
      {isDarkMode ? (
        <Sun className="!h-5 !w-5" />
      ) : (
        <Moon className="!h-5 !w-5" />
      )}
    </Button>
  );
};
