import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ] as const;

  const CurrentIcon = themes.find((t) => t.name === theme)?.icon || Moon;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-2xl border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group shadow-xl"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 p-2 w-36 rounded-2xl glass z-50 flex flex-col gap-1"
          >
            {themes.map(({ name, icon: Icon, label }) => (
              <button
                key={name}
                onClick={() => {
                  setTheme(name as "light" | "dark" | "system");
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${theme === name
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
