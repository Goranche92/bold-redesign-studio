import { figma } from "@/data/figma-assets";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function LandingTestimonial() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 pt-10 pb-16 md:px-6">
      <div className="mb-8 flex items-center gap-2">
        <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
        <span className="text-[15.1px] leading-[19.2px] uppercase">Testimonial</span>
      </div>

      <div className="relative min-h-[480px] w-full overflow-hidden rounded-3xl md:min-h-[597px]">
        <img src={figma.testimonialBg} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="relative flex min-h-[480px] flex-col md:min-h-[597px] md:flex-row">
          <div className="max-w-full bg-[#04070a] px-8 py-12 md:max-w-[484px] md:rounded-br-[32px] md:rounded-tr-[32px] md:py-[60px] md:pr-[52px]">
            <blockquote className="text-[clamp(1.15rem,2.2vw,1.85rem)] leading-[48px] text-white">
              <p>&ldquo;Working with Goran felt</p>
              <p>straightforward. He understood what</p>
              <p>we needed, asked the right questions,</p>
              <p>and shipped UI that was both clear</p>
              <p>and solid in the implementation.</p>
              <p>Communication was easy, and the</p>
              <p>result matched what we had in mind</p>
              <p>— with better edge cases covered.&rdquo;</p>
            </blockquote>
          </div>
          <div className="relative mt-auto flex flex-col gap-4 px-8 py-10 md:absolute md:bottom-0 md:left-[58%] md:mt-0 md:px-12 md:py-8">
            <p className="font-display text-[32px] leading-[48px] font-normal uppercase text-[#f00862]">Alex Morgan</p>
            <p className="text-[14.6px] leading-[19.2px] text-white">Founder, Zyra Music Platform</p>
          </div>
        </div>

        <div className="absolute top-6 right-6 flex gap-3">
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full border border-white bg-[#04070a] p-2 text-white"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full border border-white bg-[#04070a] p-2 text-white"
            aria-label="Next testimonial"
          >
            <ArrowRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
