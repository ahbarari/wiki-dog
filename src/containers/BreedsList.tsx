import Card from "@/components/Card";
import { Breed } from "@/types/breeds";

interface BreedsListProps {
    breeds: Breed[]
}

export const BreedsList = ({breeds}: BreedsListProps) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 mt-6">
          {breeds.map(breed => (
            <Card key={breed.id} breedDetail={breed} />
          ))}
    </div>
)