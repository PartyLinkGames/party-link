interface Props {
  name: string;
  onClick: any;
}

export function LiCharacters({ name, onClick }: Props) {
  return (
    <li className="w-90 " onClick={onClick}>
      <button className="w-full h-8 bg-primary rounded-sm text-white">
        {name}
      </button>
    </li>
  );
}
