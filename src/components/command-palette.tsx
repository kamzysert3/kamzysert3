import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Copy, Download, Github, Linkedin, Moon, Sun } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { NAV_ITEMS, profile, RESUME_URL, RESUME_FILENAME } from "@/data/resume";
import { scrollToSection } from "@/lib/scroll";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const close = () => onOpenChange(false);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {NAV_ITEMS.map((item) => (
            <CommandItem
              key={item.href}
              value={item.label}
              onSelect={() => {
                close();
                scrollToSection(item.href.slice(1));
              }}
            >
              <span>{item.label}</span>
              <CommandShortcut className="tnum">
                {NAV_ITEMS.findIndex((n) => n.href === item.href) + 1}
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            value="GitHub"
            onSelect={() => {
              close();
              window.open(profile.contact.githubUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </CommandItem>
          <CommandItem
            value="LinkedIn"
            onSelect={() => {
              close();
              window.open(profile.contact.linkedinUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </CommandItem>
          <CommandItem
            value="Copy email"
            onSelect={async () => {
              try {
                await navigator.clipboard.writeText(profile.contact.email);
                setCopied(true);
              } catch {
                window.location.href = `mailto:${profile.contact.email}`;
              }
            }}
          >
            <Copy className="h-4 w-4" aria-hidden />
            {copied ? "Copied!" : "Copy email"}
            {copied && <CommandShortcut>{profile.contact.email}</CommandShortcut>}
          </CommandItem>
          <CommandItem
            value="Download resume"
            onSelect={() => {
              close();
              const a = document.createElement("a");
              a.href = RESUME_URL;
              a.download = RESUME_FILENAME;
              a.click();
            }}
          >
            <Download className="h-4 w-4" aria-hidden />
            Download resume
            <CommandShortcut>PDF</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="System">
          <CommandItem
            value="Toggle theme"
            onSelect={() => {
              close();
              setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
          >
            {resolvedTheme === "dark" ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
            Switch to {resolvedTheme === "dark" ? "light" : "dark"} theme
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}