import "./animation.css";
import type { CSSProperties } from "react";

export default function NotificationStack({ items = ["Pagamento recebido", "Novo comentário", "Backup concluído"] }: { items?: string[] }) {
  return (
    <div className="notification-stack" role="list">
      {items.map((item, i) => (
        <div key={item} role="listitem" className="notification-stack__card" style={{ "--i": i } as CSSProperties}>
          <strong>{item}</strong>
          <span>{i === 0 ? "agora" : i + " min"}</span>
        </div>
      ))}
    </div>
  );
}
