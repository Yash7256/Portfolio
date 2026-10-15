import { BentoCard } from './components/BentoCard'
import { Hero } from './components/Hero'
import { PhotoCard } from './components/PhotoCard'
import { ToolsMarquee } from './components/ToolsMarquee'
import { TopBar } from './components/TopBar'
import { content } from './data/content'

export default function App() {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-[1600px] px-4 pt-4 pb-4 md:h-dvh md:overflow-hidden md:px-5 md:pt-5 md:pb-5">
      <TopBar />
      <Hero />

      <main className="relative z-10 mt-8 grid grid-cols-1 gap-4 md:absolute md:inset-x-5 md:top-[22%] md:bottom-5 md:mt-0 md:grid-cols-12 md:grid-rows-2">
        <BentoCard
          label="About"
          href={content.links.about}
          className="min-h-[180px] md:col-span-3 md:min-h-0"
        />

        <BentoCard
          label="Portfolio"
          href={content.links.portfolio}
          className="min-h-[180px] md:col-span-9 md:min-h-0"
        />

        <BentoCard
          label="Contact"
          href={content.links.contact}
          className="min-h-[180px] md:col-span-6 md:min-h-0"
        />

        <PhotoCard className="aspect-[4/5] min-h-[180px] md:col-span-3 md:aspect-auto md:min-h-0" />

        <div className="grid min-h-[180px] grid-rows-2 gap-4 md:col-span-3 md:min-h-0">
          <BentoCard bare className="min-h-[180px] md:min-h-0">
            <ToolsMarquee />
          </BentoCard>
          <BentoCard
            label="Resume"
            href={content.links.resume}
            className="min-h-[180px] md:min-h-0"
          />
        </div>
      </main>
    </div>
  )
}
