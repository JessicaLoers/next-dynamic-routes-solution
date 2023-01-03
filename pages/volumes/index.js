import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();

  function redirectToRandomVolume() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolumeSlug = volumes[randomIndex].slug;
    router.push(`/volumes/${randomVolumeSlug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <button onClick={redirectToRandomVolume}>Suprise Me!</button>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
