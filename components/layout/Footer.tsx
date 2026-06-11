import { siteConfig } from "@/components/data/site";

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-border py-8">
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-6 text-[13px] text-text-faint">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>Built to ship.</p>
      </div>
    </footer>
  );
}
