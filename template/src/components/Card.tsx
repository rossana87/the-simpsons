interface CardProps {
  name: string;
  gender: string;
  portrait: 'string';
}

export const Card = ({ name, gender, portrait }: CardProps) => {
  return (
    <div className="flex flex-col border rounded border-gray-200 p-4 mb-4">
      <div className="text-sm text-center">
        <div className="flex justify-center p-4">
          <img
            src={`https://cdn.thesimpsonsapi.com/200${portrait}`}
            alt={name}
            className="w-full max-w-[8rem] aspect-square object-cover rounded"
          />
        </div>
        <p className="font-bold">{name}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
};
