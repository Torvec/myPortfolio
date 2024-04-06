export default function SectionHeader({
  title,
  subtitle,
  number,
}: {
  title: string;
  subtitle: string;
  number: string;
}) {
  const Title = () => {
    return (
      <div className="flex justify-between items-baseline font-bold">
        <h2 className="text-5xl text-stone-300">{title}</h2>
        <span className="text-base text-stone-600">{number}</span>
      </div>
    );
  };

  const Subtitle = () => {
    return (
      <p className="text-base font-bold uppercase text-stone-500">{subtitle}</p>
    );
  };

  return (
    <div className="mx-5 mb-20 border-b-4 border-orange-600 flex flex-col-reverse">
      <Title />
      <Subtitle />
    </div>
  );
}
