import Header from "@/components/Header";
import { getBreedsList } from "../src/api/services/GetBreed";
import { BreedsList } from "@/containers/BreedsList";

export default async function Home() {

  const breeds = await getBreedsList()

  return (
    <main>
      <Header title="Breeds" count={breeds.length} />
        <BreedsList breeds={breeds} />
    </main>
  );
}
