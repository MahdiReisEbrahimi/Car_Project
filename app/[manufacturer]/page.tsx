interface ManufacturerDetailProps {
  params: {
    manufacturer: string;
  };
}

export default function ManufacturerDetail({
  params,
}: ManufacturerDetailProps) {
  return (
    <main>
      <div>this is manufacturer page : {params.manufacturer}</div>
    </main>
  );
}
