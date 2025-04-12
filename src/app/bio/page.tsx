import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import bioImage from '../../../public/public2/bio.jpg';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="h-auto min-h-screen bg-white text-black text-center p-5 flex flex-col items-center">
      <div className="max-w-3xl mb-6">
        <h1 className="text-3xl font-bold">Maximilien Antoine Gontard</h1>
        <p className="text-lg mt-2">
          also known as Swu, is a French and Polish 19-year-old fashion model and artist exploring sound, literary, and visual media.
        </p>
      </div>
      <div className="w-full max-w-3xl text-left leading-relaxed mb-10">
        <h2 className="text-3xl font-bold mb-4">VISUAL</h2>
        <p>
          Swu&#39;s interest in image and cinema was first sparked by his older brother, photographer and filmmaker
          <a href="https://www.mathiaskarlgontard.com/" target="_blank" className="underline"> Mathias Karl</a>, who exposed him to intricate camera techniques, thought-provoking films, and visually complex
          compositions early on in his life. The Swu&#39;s photography, often relying on raw form, structure, as well as heavy
          play of light and shadow, reflects his experience of growing up in rapidly developing post-Soviet Poland and a
          desolate, industrial area in the south side of its capital city, Warsaw.
        </p>
        <p className="mt-4">
          Haunting sounds of the airport and cargo trains late at night — forests, fields, and croplands gradually pushed
          back to unapologetically running stretches of highways, endless rows of glaring streetlights and urban
          developments bordering warehouses, oil tanks, and overpasses. His subject matter stresses the notions of passing
          time; <strong>generational contrast, transformation, degradation, and decay</strong>. Focusing on history while embracing
          modernity, he looks to emphasise the purity and complexity of both the natural world and human nature.
        </p>
        <p className="mt-4">
          That same area, home to the Tor Wyścigów Konnych Służewiec horse racing track, placed history directly within
          the reach of his palm. The Nazis used it as an airbase for their air fleet between 1939 and &#39;45. A water pressure
          tower, bombed down in an act of unprovoked destruction upon their retreat, in a way like few of its kind, to this
          day, lies down the road from his childhood home. The entire length of the perimeter wall running in front of his
          window is the site of many executions and features countless bullet casings from the Warsaw uprising.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">SOUND</h2>
        <p>
          Swu&#39;s first experience with music dates back to second grade when he had enrolled in music classes at his primary
          school and was taught the fundamentals of rhythm. This caused him to take up vocal and piano classes with Polish
          Opera Singer <a href="https://adrianaferfecka.com/" target="_blank" className="underline">Adriana Ferfecka</a> and Warsaw Conservatory Music Theory Professor <a href="https://chopin.edu.pl/employees/142_ewa-guz-seroka" target="_blank" className="underline"> Ewa Guz-Seroka</a> and later pursue
          formal education in music, studying <strong>Production &amp; Audio Engineering</strong> at <strong>Point Blank Music School</strong> in London.
        </p>
        <p className="mt-4">
          He had begun experimenting with his own production at the age of 12, initially splicing Polish folk songs, often
          leaving them unaccompanied by drums. With time, he expanded his sonic palette across a variety of styles spanning
          from <strong>upbeat 2-step footwork tracks</strong>; <strong>ominous granular textures</strong> dragged across longing experimental compositions and,
          emotion-driven muddy <strong>alternative rap</strong> beats.
        </p>
        <p className="mt-4">
          In a life full of <strong>contrasts</strong> and <strong>contradictions</strong>, he pursues <strong>clarity</strong> through <strong>abstraction</strong> -
        </p>
        <p className="italic mt-4">&quot;Creating art was always <strong>expression</strong>. A means of making sense of things. A way of processing,
          translating, creating structure where there was once only feeling - of <strong>acknowledging, reflecting, highlighting</strong>
          and <strong>affirming</strong>, using techniques that resonated most in the current moment...&quot;
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">LITERARY</h2>
        <p>
          He further transmits his experience with the world through writing, touching on subjects such as grief—dealing
          with the loss of key figures at a young age—identity, growing up in a rapidly changing post-Soviet environment;
          and aspects of human comportment.
        </p>
        <p className="mt-4">
          A large part of his art is displaying the <strong>creative process</strong> itself. How emotions are translated into image, sound,
          and word. Swu makes his work personal and unique by often manually playing in percussive sounds, making them
          seemingly instigated by impulses reflecting rhythms of his mindstate, rather than any <strong>sense of time and tempo</strong>.
        </p>
        <p className="mt-4">
          Swu&#39;s name can currently only be linked to a limited number of broadly available projects. Looking to pursue
          various areas of his interest while being rigorously aware of his young age, the artist has chosen to mostly keep
          his work private over the years.
        </p>
        <p className="mt-4 italic">&quot;I want to be a better person in every aspect. I really don&#39;t feel I&#39;ve in any way fulfilled my
          potential in every area of my life. But I&#39;m optimistic.&quot;
        </p>
        <p className="text-right font-bold">Damon Albarn</p>
      </div>

      <div className="mt-20 mb-20">
        <Image src={bioImage} alt="Bio1 Image" className="rotate-90 max-w-full h-auto" width={400} height={400} />
      </div>

      <NavBar home={0} isSelected={5} />
    </div>
  );
}