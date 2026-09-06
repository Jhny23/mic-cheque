export default function RecapTile({
  city,
  photo,
}: {
  city: string;
  photo?: string;
}) {
  return (
    <div className="relative aspect-square overflow-hidden bg-ink/5">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={`${city} hangout recap`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.05)" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body font-bold text-xs uppercase tracking-wide text-static">
            {city}
          </span>
        </div>
      )}
    </div>
  );
}
