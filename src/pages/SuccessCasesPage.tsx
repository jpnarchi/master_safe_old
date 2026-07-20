import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const sc = {
  heroTitle: { es: 'Casos de Éxito', en: 'Success Cases', pt: 'Casos de Sucesso' },
  heroSubtitle: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  mainTitle: {
    es: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    en: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    pt: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  mainDesc1: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  mainDesc2: {
    es: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    en: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    pt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  mainDesc3: {
    es: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
    en: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
    pt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
  },
  feat1: { es: 'Lorem ipsum dolor sit amet', en: 'Lorem ipsum dolor sit amet', pt: 'Lorem ipsum dolor sit amet' },
  feat2: { es: 'Consectetur adipiscing elit', en: 'Consectetur adipiscing elit', pt: 'Consectetur adipiscing elit' },
  feat3: { es: 'Sed do eiusmod tempor incididunt', en: 'Sed do eiusmod tempor incididunt', pt: 'Sed do eiusmod tempor incididunt' },
  feat4: { es: 'Ut labore et dolore magna aliqua', en: 'Ut labore et dolore magna aliqua', pt: 'Ut labore et dolore magna aliqua' },
  case1Title: { es: 'Caso de Éxito 1: Lorem Ipsum', en: 'Success Case 1: Lorem Ipsum', pt: 'Caso de Sucesso 1: Lorem Ipsum' },
  case1Desc: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
    pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
  },
  case2Title: { es: 'Caso de Éxito 2: Lorem Ipsum', en: 'Success Case 2: Lorem Ipsum', pt: 'Caso de Sucesso 2: Lorem Ipsum' },
  case2Desc: {
    es: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    en: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    pt: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
  },
  case3Title: { es: 'Caso de Éxito 3: Lorem Ipsum', en: 'Success Case 3: Lorem Ipsum', pt: 'Caso de Sucesso 3: Lorem Ipsum' },
  case3Desc: {
    es: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    en: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    pt: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  },
  case4Title: { es: 'Caso de Éxito 4: Lorem Ipsum', en: 'Success Case 4: Lorem Ipsum', pt: 'Caso de Sucesso 4: Lorem Ipsum' },
  case4Desc: {
    es: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    en: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    pt: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  },
};

const SuccessCasesPage = () => {
  const { language } = useLanguage();
  const T = (obj: { es: string; en: string; pt: string }) => obj[language as 'es' | 'en' | 'pt'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pgnavy to-pgblue flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">{T(sc.heroTitle)}</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">{T(sc.heroSubtitle)}</p>
        </div>
      </section>

      {/* Title Card - overlapping hero and next section */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-[122px] sm:-mt-[152px] md:-mt-[182px] mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <h2 className="text-xl sm:text-2xl font-bold text-pgnavy text-center mb-6">
            {T(sc.mainTitle)}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-4">
            {T(sc.mainDesc1)}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-4">
            {T(sc.mainDesc2)}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-8">
            {T(sc.mainDesc3)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[sc.feat1, sc.feat2, sc.feat3, sc.feat4].map((feat, i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-pgnavy font-medium text-sm sm:text-base">{T(feat)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Case Sections — 50/50 with placeholder image containers */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Case 1 — Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-2xl shadow-lg bg-gray-200" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(sc.case1Title)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(sc.case1Desc)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Case 2 — Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(sc.case2Title)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(sc.case2Desc)}</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-2xl shadow-lg bg-gray-200" />
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Case 3 — Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-2xl shadow-lg bg-gray-200" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(sc.case3Title)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(sc.case3Desc)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Case 4 — Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(sc.case4Title)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(sc.case4Desc)}</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-2xl shadow-lg bg-gray-200" />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessCasesPage;
