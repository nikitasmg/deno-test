import Counter from "../islands/Counter.tsx";
import PhotoCard from "../components/PhotoCard.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Photo {
    id: number
    albumId: number
    title: string
    url: string
    thumbnailUrl: string
}
export const handler: Handlers<Photo[] | null> = {
    async GET(_, ctx) {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=1000`);
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const photos: Photo[] = await resp.json();
        return ctx.render(photos);
    },
};

export default function Home({ data }: PageProps<Photo[] | null>) {
    const counters = new Array(1000)
    // @ts-ignore
    counters.fill('hehe')

  // @ts-ignore
    // @ts-ignore
    return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {data.map(photo => <PhotoCard photo={photo} key={photo.id}/>)}
            {counters.map((el ,idx) => <Counter key={idx} />)}
        </div>
    </div>
  );
}
