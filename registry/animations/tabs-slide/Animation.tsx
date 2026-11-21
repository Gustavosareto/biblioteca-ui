import "./animation.css";

// shortcut: o CSS cobre exatamente 3 opções; para mais, ajustar largura da pílula e seletores
export default function TabsSlide({ items = ["Dia", "Semana", "Mês"], name = "tabs-slide" }: { items?: [string, string, string]; name?: string }) {
  return (
    <div className="tabs-slide" role="radiogroup">
      {items.map((item, i) => (
        <label key={item}>
          <input type="radio" name={name} defaultChecked={i === 0} />
          {item}
        </label>
      ))}
      <span className="tabs-slide__pill" />
    </div>
  );
}
