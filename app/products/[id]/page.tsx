type PageProps = { params: { id: string } };

export default function ProductPage({ params }: PageProps) {
  return (
    <main>
      {/* URLのid部分を取得できる */}
      <h1>Product #{params.id}</h1>
    </main>
  );
}
