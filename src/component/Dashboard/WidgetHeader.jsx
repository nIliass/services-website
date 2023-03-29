export default function WidgetHeader({ title, content, style }) {
  return (
    <header className="text-center md:text-left">
      <h3 className={`text-2xl font-bold mb-2.5 ${style}`}>{title}</h3>
      {content && <p className={"text-[0.96rem] text-gray-500"}>{content}</p>}
    </header>
  );
}
