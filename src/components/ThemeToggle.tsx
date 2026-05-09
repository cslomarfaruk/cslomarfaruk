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
        className="px-2 py-1.5 border-2 border-white/20 hover:border-accent bg-brand transition-colors group"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 border-2 border-white/20 bg-brand z-50 flex flex-col shadow-brutal"
          >
            {themes.map(({ name, icon: Icon, label }) => (
              <button
                key={name}
                onClick={() => {
                  setTheme(name as "light" | "dark" | "system");
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 border-transparent last:border-b-0 ${theme === name
                  ? "bg-accent text-black border-accent"
                  : "text-white hover:bg-accent/10 hover:text-accent"
                  }`}
              >
                <Icon className="w-3 h-3" />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
