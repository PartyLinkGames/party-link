interface Props {
  name: string;
}

export function LiCharacters({ name }: Props) {
  return (
    <li className="w-90 ">
      <button className="w-full h-8 bg-primary rounded-sm text-white">
        {name}
      </button>
    </li>
  );
}
