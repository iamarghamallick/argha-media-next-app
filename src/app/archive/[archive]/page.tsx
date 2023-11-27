export default async function AlbumPage({ params }: { params: { archive: string } }) {
    return (
        <section className="min-h-screen p-4">
            <h1 className='font-bold text-3xl border-b-2 pb-2 mt-2'>{`Going back to ${params.archive}`}</h1>
            <p className="mt-4 text-center">Nothing is here!</p>
        </section>
    );
}
