export interface ICard {
  title: string;
  image: string;
  body: string;
}

const Card: React.FC<ICard> = ({ title, image, body }) => {
  return (
    <div className="w-full max-w-sm rounded-lg border shadow-md">
      <img src={image} alt="Image" className="rounded-t-lg" />
      <div className="p-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    </div>
  );
};

export default Card;
