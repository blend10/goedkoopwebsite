import Image from "next/image";

const steps = ["Aanvraag versturen", "Pakket kiezen", "Website ontvangen"];

const features = [
  {
    label: "Modern design",
    icon: (
      <Image src="/images/ic1.svg" alt="Modern design" width={20} height={20} />
    ),
  },
  {
    label: "Mobiele optimalisatie",
    icon: (
      <Image
        src="/images/ic2.svg"
        alt="Mobiele optimalisatie"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Snelle laadtijden",
    icon: (
      <Image
        src="/images/ic3.svg"
        alt="Snelle laadtijden"
        width={20}
        height={20}
      />
    ),
  },
  {
    label: "Opgebouwd voor aanvragen",
    icon: (
      <Image
        src="/images/ic4.svg"
        alt="Opgebouwd voor aanvragen"
        width={20}
        height={20}
      />
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 lg:py-16">
      <div className="max-w-300 mx-auto w-full px-6 md:px-8">
        {/* Header */}
        <h2 className="text-[30px] sm:text-[50px] font-medium text-[#141721] leading-tight mb-10 text-center sm:text-left">
          Start je website <br className="hidden sm:inline" /> Snel &amp; slim
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="grid-cols-2 bg-white rounded-2xl p-6 flex flex-col gap-5 justify-between">
            <div className="flex flex-row items-start justify-start gap-3">
              <Image
                src="/images/lightining.svg"
                alt="Icon 1"
                width={56}
                height={56}
                className="shrink-0"
              />

              <div>
                <h3 className="text-[22px] sm:text-[28px] font-medium text-[#141721] leading-snug">
                  Premium website zonder premium prijs
                </h3>
                <p className="text-[14px] font-medium text-[#141721] leading-relaxed mt-2">
                  Een op maat gemaakte website die professioneel oogt, snel
                  laadt en <br className="hidden sm:inline" />
                  uw bedrijf op hoogwaardige wijze presenteert.
                </p>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="mt-6 sm:mt-auto space-y-2">
              <div className="flex flex-row w-full gap-4 items-center">
                <div className="flex items-center gap-2 text-[13px] text-[#9CA3AF]">
                  <Image
                    src="/images/icon12.svg"
                    alt="Question mark"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#03030F] font-medium">Bureau</span>
                </div>
                <div className="flex items-center justify-between bg-[#F9F9F9] border border-gray-100 rounded-r-xl w-full px-4 py-3">
                  <span className="text-[14px] font-medium text-[#141721]">
                    tot €5.000+
                  </span>
                </div>
              </div>

              <div className="flex flex-row items-center w-full gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <Image
                    src="/images/webstudio.svg"
                    alt="Check mark"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                  <span className="text-[13px] font-semibold text-[#03030F]">
                    WebStudio
                  </span>
                </div>
                <div className="flex items-center bg-linear-to-r from-black to-[#8715AD] border border-gray-100 rounded-r-xl px-4 py-3 w-full">
                  <span className="text-white text-[14px] font-medium rounded-full">
                    aanzienlijk goedkoper
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="grid-cols-2 bg-white rounded-2xl p-6 flex flex-col sm:flex-row gap-6 overflow-hidden justify-between">
            <div className="flex flex-col gap-4 flex-1 min-w-0">
              <h3 className="text-[22px] sm:text-[28px] font-medium text-[#03030F] leading-snug">
                Eenvoudig proces tot <br className="hidden sm:inline" />
                aan de lancering
              </h3>
              <p className="text-[14px] font-medium text-[#141721] leading-relaxed">
                We houden het proces helder en <br className="hidden sm:inline" /> eenvoudig. Je stuurt je
                aanvraag, kiest je <br className="hidden sm:inline" /> pakket en ontvangt je website in korte
                tijd.
              </p>
              <div className="mt-6 sm:mt-auto space-y-3">
                {steps.map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <Image
                      src="/images/check.svg"
                      alt="Check mark"
                      width={20}
                      height={20}
                    />
                    <span className="text-[13px] text-[#03030F] font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex-shrink-0 w-full sm:w-50 self-center sm:self-end flex justify-center sm:block mt-4 sm:mt-0">
              <Image
                src="/images/phone.svg"
                alt="mockup"
                width={232}
                height={310}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 mt-4 lg:mt-2">
          {/* Card 3 — Snel online */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
            <div className="grid-cols-2 bg-white rounded-2xl p-6 flex flex-col gap-5">
              <Image
                src="/images/icon13.svg"
                alt="Check mark"
                width={56}
                height={56}
              />

              <div>
                <h3 className="text-[22px] sm:text-[28px] font-medium text-[#03030F] leading-snug">
                  Snel online <br className="hidden sm:inline" /> meestal binnen 7 dagen
                </h3>
                <p className="text-[13px] text-[#141721] leading-relaxed mt-3">
                  Geen lange wachttijden en geen ingewikkelde bureauprocessen.
                  Je <br className="hidden sm:inline" /> website wordt efficiënt ontwikkeld <br className="hidden sm:inline" /> en is snel
                  klaar voor gebruik.
                </p>
              </div>
            </div>
            <div className="grid-cols-2 bg-white rounded-2xl p-6 flex flex-col gap-5">
              <Image
                src="/images/icon14.svg"
                alt="Check mark"
                width={56}
                height={56}
              />

              <div>
                <h3 className="text-[22px] sm:text-[28px] font-medium text-[#03030F] leading-snug">
                  Lancering support <br className="hidden sm:inline" /> inbegrepen
                </h3>
                <p className="text-[13px] text-[#141721] leading-relaxed mt-3">
                  Ook na oplevering blijven we bereikbaar Je <br className="hidden sm:inline" /> en
                  ondersteunen we je bij kleine <br className="hidden sm:inline" /> aanpassingen of vragen.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — Alles voor sterke online aanwezigheid */}
          <div
            className="grid-cols-2 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 overflow-hidden justify-between"
            style={{
              backgroundImage: "url('/images/back.png')",
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          >
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <h3 className="text-[22px] sm:text-[28px] font-medium text-[#141721] leading-snug">
                Alles voor een sterke <br className="hidden sm:inline" /> online aanwezigheid
              </h3>
              <div className="space-y-3.5">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="text-[#141721] flex-shrink-0">
                      {f.icon}
                    </span>
                    <span className="text-[13px] font-medium text-[#141721]">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stacked mockup images */}
            <div className="relative flex-shrink-0 w-full sm:w-50 self-center flex justify-center sm:block mt-4 sm:mt-0">
              <Image
                src="/images/active.png"
                alt="mockup 1"
                width={400}
                height={200}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
