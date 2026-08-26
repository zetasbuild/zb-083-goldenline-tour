const fs = require('fs');

let content = fs.readFileSync('src/app/about/page.tsx', 'utf8');

// 1. Remove brandPortfolios definition
content = content.replace(/const brandPortfolios = \[\s*\{[\s\S]*?\},\s*\];\s*/, '');

// 2. Replace the Signature Brand Portfolios Section with Founder block
const searchStr = `{/* Signature Brand Portfolios Section */}
      <section className="py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Specialized Travel Collections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)]">
                Our Signature Brands
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              Dedicated hospitality divisions tailored for ultra-luxury, wellness rejuvenation, and off-grid wildlife expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPortfolios.map((brand, idx) => (
              <div
                key={idx}
                className="bg-[#F5F2E6] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#e2ede7] transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#041B2D]">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[var(--color-primary)]/90 backdrop-blur-md text-[#8ed1fc] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {brand.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#8ed1fc] transition-colors">
                      {brand.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {brand.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="/tours"
                      className="text-xs font-bold text-[#0077b6] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Tours</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>`;

const replaceStr = `{/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 flex flex-col items-start">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4">
                About Our Founder
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                <p>
                  With over 30 years of experience in the transportation and tourism industry, our founder has built a strong reputation for delivering reliable, professional, and customer-focused travel solutions. Throughout his career, he has successfully managed transportation operations, coordinated inbound tours, and provided exceptional service to travelers from around the world.
                </p>
                <p>
                  His extensive expertise in handling inbound tourism, travel logistics, and group transportation has enabled countless visitors to enjoy seamless and memorable travel experiences. Having worked with clients from diverse cultural backgrounds, he possesses a deep understanding of the unique needs and expectations of international travelers.
                </p>
                <p>
                  Driven by a passion for hospitality and excellence, our founder is committed to ensuring every guest receives personalized attention, safe transportation, and outstanding service from arrival to departure. His dedication, industry knowledge, and ability to connect with people from different cultures continue to be the foundation of our company&apos;s success.
                </p>
              </div>

              <h4 className="font-bold text-[var(--color-primary)] mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Over 30 years of industry experience',
                  'Expertise in transportation and inbound tourism services',
                  "Strong understanding of multicultural travelers' needs",
                  'Professional, reliable, and customer-focused service',
                  'Commitment to safety, comfort, and memorable travel experiences'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#cba258] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-gray-600 font-medium italic border-l-4 border-[#cba258] pl-4">
                This wealth of experience and dedication allows us to provide trusted travel and transportation solutions for visitors from around the globe.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder.webp"
                  alt="Our Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mr. Nihar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/guide.webp"
                  alt="Senior Tour Guide, Mr. Nihar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4">
                Meet Our Senior Tour Guide, Mr. Nihar
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  With over 25 years of experience in inbound tourism, Mr. Nihar is a highly respected and knowledgeable tour guide dedicated to creating unforgettable travel experiences. His extensive career has enabled him to welcome and assist visitors from a wide range of nationalities and cultural backgrounds.
                </p>
                <p>
                  Over the years, Mr. Nihar has successfully guided travelers from Europe, the Middle East, Asia, and many other regions across the world, providing them with authentic insights, personalized service, and memorable journeys. His deep understanding of local culture, history, and attractions, combined with his ability to connect with people from diverse backgrounds, makes him a trusted companion for every traveler.
                </p>
                <p>
                  Known for his professionalism, friendliness, and attention to detail, Mr. Nihar ensures that every guest feels comfortable, valued, and well cared for throughout their visit. His passion for showcasing the beauty, heritage, and hospitality of Sri Lanka has earned him the appreciation and trust of countless travelers over the years.
                </p>
                <p className="font-medium text-[var(--color-primary)]">
                  Through his experience, cultural awareness, and commitment to excellence, Mr. Nihar continues to play a vital role in delivering exceptional travel experiences to visitors from around the globe.
                </p>
              </div>
            </div>
          </div>`;

content = content.replace(searchStr, replaceStr);

// 3. Update 25+ to 30+
content = content.replace("{ value: '25+', label: 'Years of Heritage', sub: 'Pioneering Sri Lanka tourism since 2001' },", "{ value: '30+', label: 'Years of Heritage', sub: 'Pioneering Sri Lanka tourism since 2001' },");

fs.writeFileSync('src/app/about/page.tsx', content, 'utf8');
console.log('Fixed src/app/about/page.tsx');
