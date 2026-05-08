export default function GutFloWellness() {
  const products = [
    {
      name: 'GutFlo Lemon Mint',
      desc: 'Refreshing daily gut wellness with a clean mint finish.',
      price: '₹799',
      tag: 'Best Seller',
      image:
        'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-[#c89b72] to-[#8a5a44]',
    },
    {
      name: 'GutFlo Berry Blast',
      desc: 'Premium berry-inspired wellness hydration blend.',
      price: '₹899',
      tag: 'Premium',
      image:
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-[#2b1e17] to-[#6f4634]',
    },
    {
      name: 'GutFlo Tropical Lime',
      desc: 'Light tropical flavor crafted for daily gut support.',
      price: '₹849',
      tag: 'New Launch',
      image:
        'https://images.unsplash.com/photo-1622484212850-eb596d769edc?q=80&w=1200&auto=format&fit=crop',
      gradient: 'from-[#d6ab7f] to-[#8a5a44]',
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#f4efe7] text-neutral-900 overflow-hidden">
        {/* Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#d8b08f]/20 blur-3xl"></div>
          <div className="absolute bottom-[-120px] left-[-100px] w-[450px] h-[450px] rounded-full bg-[#8a5a44]/10 blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f4efe7]/80 border-b border-[#e6ddd2]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div>
              <div className="text-3xl font-black tracking-[-0.06em] text-[#8a5a44]">
                GutFlo
              </div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mt-1">
                Wellness
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-neutral-700">
              <a href="#">Home</a>
              <a href="#products">Products</a>
              <a href="#ingredients">Ingredients</a>
              <a href="#reviews">Reviews</a>
            </nav>

            <button className="rounded-full bg-[#8a5a44] hover:bg-[#6f4634] transition px-7 py-3 text-white font-semibold shadow-lg">
              Shop Now
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#ddd2c5] bg-[#fcfaf7] px-6 py-3 text-xs uppercase tracking-[0.25em] font-bold text-[#7a5a45] shadow-sm">
              Clinically Inspired Gut Wellness
            </div>

            <h1 className="mt-10 text-6xl lg:text-[7rem] font-black leading-[0.92] tracking-[-0.08em] text-[#111111]">
              Luxury
              <br />
              Wellness
              <br />
              <span className="text-[#8a5a44]">Reimagined.</span>
            </h1>

            <p className="mt-8 text-[1.15rem] leading-relaxed text-neutral-600 max-w-xl font-medium">
              GutFlo combines advanced fiber, probiotics, digestive enzymes, and hydration support into a refined daily wellness experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#8a5a44] hover:bg-[#6f4634] transition px-9 py-5 text-white text-lg font-bold shadow-[0_20px_60px_rgba(138,90,68,0.25)]">
                Explore Products
              </button>

              <button className="rounded-full border border-[#d9d0c6] bg-white px-9 py-5 text-lg font-semibold hover:bg-[#faf7f2] transition">
                Learn More
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-5 max-w-xl">
              {[
                ['30', 'Daily Sachets'],
                ['Sugar', 'Free'],
                ['5-in-1', 'Support'],
              ].map(([title, subtitle]) => (
                <div
                  key={subtitle}
                  className="rounded-[2rem] border border-[#ebe3da] bg-[#fcfaf7] p-6 shadow-sm"
                >
                  <div className="text-3xl font-black text-[#8a5a44] tracking-[-0.05em]">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">
                    {subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Hero */}
          <div className="relative flex items-center justify-center min-h-[700px]">
            <div className="absolute w-[520px] h-[520px] rounded-full bg-[#c89b72]/20 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1200&auto=format&fit=crop"
              alt="GutFlo Product"
              className="relative z-10 w-[560px] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.18)] object-cover"
            />
          </div>
        </section>

        {/* Ingredients */}
        <section
          id="ingredients"
          className="py-28 px-6 bg-[#fcfaf7] border-y border-[#eee6dc]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-[#8a5a44] uppercase tracking-[0.3em] text-sm font-bold">
                Advanced Formula
              </div>

              <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.95]">
                Built with premium wellness ingredients.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {[
                {
                  title: 'Sunfiber® PHGG',
                  desc: 'Gentle premium fiber designed for smooth digestion.',
                },
                {
                  title: 'Probiotics',
                  desc: 'Supports healthy gut balance and daily wellness.',
                },
                {
                  title: 'DigeZyme®',
                  desc: 'Digestive enzymes designed to support breakdown of food.',
                },
                {
                  title: 'Electrolytes',
                  desc: 'Hydration support for active modern lifestyles.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2.5rem] bg-white border border-[#ebe3da] p-8 shadow-sm hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#f3ece4] flex items-center justify-center text-2xl text-[#8a5a44]">
                    ✦
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
              <div>
                <div className="uppercase tracking-[0.3em] text-sm text-[#8a5a44] font-bold">
                  Product Collection
                </div>

                <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.95] text-[#111]">
                  Wellness products
                  <br />
                  designed to feel premium.
                </h2>
              </div>

              <button className="rounded-full border border-[#d8cec2] bg-white px-7 py-4 font-semibold hover:bg-[#faf7f2] transition">
                View Collection
              </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 mt-20">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-[2.8rem] bg-[#fcfaf7] border border-[#ebe3da] shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`relative h-[360px] bg-gradient-to-b ${product.gradient} overflow-hidden`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-8">
                    <div className="inline-flex rounded-full bg-[#f1e7dc] px-4 py-2 text-sm font-bold text-[#8a5a44]">
                      {product.tag}
                    </div>

                    <h3 className="mt-5 text-3xl font-black tracking-[-0.05em]">
                      {product.name}
                    </h3>

                    <p className="mt-4 text-neutral-600 leading-relaxed">
                      {product.desc}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-neutral-500">
                          Starting From
                        </div>
                        <div className="text-3xl font-black tracking-[-0.04em]">
                          {product.price}
                        </div>
                      </div>

                      <button className="rounded-full bg-[#8a5a44] hover:bg-[#6f4634] transition px-6 py-4 text-white font-bold shadow-lg">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-32 px-6 bg-[#fcfaf7]">
          <div className="max-w-6xl mx-auto text-center">
            <div className="uppercase tracking-[0.3em] text-sm font-bold text-[#8a5a44]">
              Customer Experience
            </div>

            <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.95]">
              Trusted by people who care about wellness.
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mt-20 text-left">
              {[
                'Feels premium from the first sip. Very clean and refreshing.',
                'No heavy feeling like other fiber products. Easy daily use.',
                'Packaging and experience genuinely feel international quality.',
              ].map((review, index) => (
                <div
                  key={index}
                  className="rounded-[2.5rem] bg-white border border-[#ebe3da] p-8 shadow-sm"
                >
                  <div className="text-5xl text-[#c89b72]">“</div>

                  <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                    {review}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c89b72] to-[#8a5a44]"></div>

                    <div>
                      <div className="font-bold">Verified Buyer</div>
                      <div className="text-sm text-neutral-500">
                        GutFlo Customer
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-gradient-to-r from-[#8a5a44] to-[#c89b72] shadow-[0_40px_100px_rgba(0,0,0,0.12)] text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-14 lg:p-20">
              <div>
                <div className="uppercase tracking-[0.3em] text-sm font-bold text-[#f3dfcf]">
                  Start Your Wellness Journey
                </div>

                <h2 className="mt-6 text-5xl lg:text-6xl font-black tracking-[-0.06em] leading-[0.95]">
                  Feel lighter.
                  <br />
                  Feel cleaner.
                  <br />
                  Feel GutFlo.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-[#f8eee6] max-w-xl">
                  Premium daily wellness designed for modern lifestyles.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="rounded-full bg-white text-[#8a5a44] px-8 py-5 font-black text-lg hover:bg-[#faf7f2] transition">
                    Order Now
                  </button>

                  <button className="rounded-full border border-white/30 px-8 py-5 font-bold hover:bg-white/10 transition">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop"
                  alt="GutFlo Wellness"
                  className="rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.18)] w-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e8ddd2] bg-[#fcfaf7] px-6 py-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-4xl font-black tracking-[-0.06em] text-[#8a5a44]">
                GutFlo
              </div>
              <div className="mt-2 text-neutral-500">
                Premium Daily Gut Wellness
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-sm font-semibold text-neutral-600">
              <a href="#">Home</a>
              <a href="#products">Products</a>
              <a href="#ingredients">Ingredients</a>
              <a href="#reviews">Reviews</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
