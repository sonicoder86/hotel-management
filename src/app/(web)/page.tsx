import HeroSection from '@/components/HeroSection/HeroSection'
import PageSearch from '@/components/PageSearch/PageSearch'
import Gallery from '@/components/Gallery/Gallery'
import NewsLetter from '@/components/NewsLetter/NewsLetter'
import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom'
import { getFeaturedRoom } from '@/libs/apis'

export default async function Home() {
  const featuredRoom = await getFeaturedRoom()

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  );
}
