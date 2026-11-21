import "./animation.css";

export default function UnderlineNav({ items = ["Início", "Sobre", "Contato"], current = 0 }: { items?: string[]; current?: number }) {
  return (
    <nav className="underline-nav">
      {items.map((item, i) => (
        <a key={item} href="#" aria-current={i === current ? "page" : undefined}>
          {item}
        </a>
      ))}
    </nav>
  );
}
