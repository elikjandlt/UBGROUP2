export type Project = {
  id: string;
  titleMn: string;
  titleEn: string;
  summaryMn: string;
  summaryEn: string;
  detailMn: string;
  detailEn: string;
  image: string;
  gallery: string[];
  locationMn: string;
  locationEn: string;
  timelineMn: string;
  timelineEn: string;
  featuresMn: string[];
  featuresEn: string[];
  mapImage: string;
};

export type Sector = {
  id: string;
  nameMn: string;
  nameEn: string;
  summaryMn: string;
  summaryEn: string;
  cardDescMn: string;
  cardDescEn: string;
  image: string;
  projects: Project[];
};

export const sectors: Sector[] = [
  {
    id: 'construction',
    nameMn: 'Барилгын төслүүд',
    nameEn: 'Construction Projects',
    summaryMn: 'Орон сууц, худалдаа үйлчилгээний төв, оффисын барилга.',
    summaryEn: 'Residential, retail, and office buildings.',
    cardDescMn: 'Улаанбаатар хотод олон улсын стандартад нийцсэн орон сууц, худалдаа үйлчилгээний төв, оффисын барилгуудыг бүтээн байгуулж байна.',
    cardDescEn: 'Developing international-standard residential, retail, and office buildings in Ulaanbaatar.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200\u0026q=80',
    projects: [
      {
        id: 'ub-tower',
        titleMn: 'UB Tower',
        titleEn: 'UB Tower',
        summaryMn: 'Улаанбаатар хотын төвд баригдах олон үйлдэлт цамхаг.',
        summaryEn: 'A multi-purpose tower in the heart of Ulaanbaatar.',
        detailMn: 'UB Tower нь Улаанбаатар хотын төвд байрлах, орчин үеийн дизайн, тогтвортой инженерчлэлээр баригдах олон үйлдэлт цамхаг бөгөөд оффис, худалдаа үйлчилгээний талбай, орон сууцны хослолыг багтаана.',
        detailEn: 'UB Tower is a modern mixed-use high-rise in central Ulaanbaatar, combining office, retail, and residential spaces with sustainable engineering.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар, Сүхбаатар дүүрэг',
        locationEn: 'Ulaanbaatar, Sukhbaatar district',
        timelineMn: '2022–2027',
        timelineEn: '2022–2027',
        featuresMn: ['33 давхар цамхаг', 'Оффис болон орон сууц', 'Доод давхарт худалдааны төв'],
        featuresEn: ['33-floor tower', 'Office and residential', 'Retail podium'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'khan-uul-residence',
        titleMn: 'Хан-Уул хотхон',
        titleEn: 'Khan-Uul Residence',
        summaryMn: 'Гэр бүлийн амьдралд зориулсан орчин үеийн хотхон.',
        summaryEn: 'A modern residential complex designed for families.',
        detailMn: 'Хан-Уул хотхон нь ногоон байгууламж, хүүхдийн тоглоомын талбай, фитнесс, дэлгүүртэй гэр бүлийн хэрэгцээнд тулгуурласан орчин үеийн орон сууцны төсөл юм.',
        detailEn: 'Khan-Uul Residence is a family-oriented modern housing project with green spaces, playgrounds, fitness, and retail amenities.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар, Хан-Уул дүүрэг',
        locationEn: 'Ulaanbaatar, Khan-Uul district',
        timelineMn: '2021–2026',
        timelineEn: '2021–2026',
        featuresMn: ['300+ айлын орон сууц', 'Ногоон байгууламж', 'Дуу чимээ багатай бүс'],
        featuresEn: ['300+ apartments', 'Green landscaping', 'Low-noise zone'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'sukhbaatar-office',
        titleMn: 'Сүхбаатар оффис',
        titleEn: 'Sukhbaatar Office',
        summaryMn: 'Төв шуудан орчимд баригдах А зэрэглэлийн оффис.',
        summaryEn: 'A Grade-A office building near Central Post Office.',
        detailMn: 'Сүхбаатар оффис нь нийтийн тээвэр, банк, үйлчилгээнд ойр, А зэрэглэлийн оффисын шаардлагыг бүрэн хангасан бизнес төв юм.',
        detailEn: 'Sukhbaatar Office is a Grade-A business center close to public transport, banks, and services, designed for modern companies.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар, Сүхбаатар дүүрэг',
        locationEn: 'Ulaanbaatar, Sukhbaatar district',
        timelineMn: '2023–2026',
        timelineEn: '2023–2026',
        featuresMn: ['А зэрэглэлийн оффис', 'Доод давхарт дэлгүүр', 'Далд зогсоол'],
        featuresEn: ['Grade-A office', 'Ground-floor retail', 'Underground parking'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
    ],
  },
  {
    id: 'investment',
    nameMn: 'Санхүү, хөрөнгө оруулалт',
    nameEn: 'Finance \u0026 Investment',
    summaryMn: 'Хөрөнгө оруулалтын сан, санхүүгийн зөвлөх үйлчилгээ.',
    summaryEn: 'Investment funds and financial advisory.',
    cardDescMn: 'Хөрөнгө оруулалтын сан, санхүүгийн зөвлөх үйлчилгээ, хөрөнгийн менежментийн чиглэлээр үйл ажиллагаа явуулдаг.',
    cardDescEn: 'Operating investment funds, financial advisory, and asset management services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200\u0026q=80',
    projects: [
      {
        id: 'ub-investment-fund',
        titleMn: 'UB Investment сан',
        titleEn: 'UB Investment Fund',
        summaryMn: 'Барилга, үл хөдлөх хөрөнгө, үйлдвэрлэлд чиглэсэн сан.',
        summaryEn: 'A fund focused on construction, real estate, and manufacturing.',
        detailMn: 'UB Investment сан нь Монголын бодит хөрөнгөд чиглэсэн, удаан хугацааны өгөөжтэй хөрөнгө оруулалтын санг удирдана.',
        detailEn: 'UB Investment Fund manages long-term, yield-focused investments in Mongolian real assets.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2018–2028',
        timelineEn: '2018–2028',
        featuresMn: ['Барилгын хөрөнгө', 'Үл хөдлөх хөрөнгө', 'Удаан хугацааны өгөөж'],
        featuresEn: ['Construction assets', 'Real estate', 'Long-term yield'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'asset-advisory',
        titleMn: 'Хөрөнгийн зөвлөх үйлчилгээ',
        titleEn: 'Asset Advisory Service',
        summaryMn: 'Хөрөнгө үнэлгээ, татварын зөвлөх, гэрээ хэлцэл.',
        summaryEn: 'Asset valuation, tax advisory, and deal structuring.',
        detailMn: 'Манай мэргэжлийн баг хөрөнгө үнэлгээ, зах зээлийн судалгаа, татварын зөвлөх үйлчилгээ, худалдан авах гэрээ хэлцлийн дэмжлэг үзүүлдэг.',
        detailEn: 'Our professional team provides asset valuation, market research, tax advisory, and M\u0026A deal support.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2016– ongoing',
        timelineEn: '2016– ongoing',
        featuresMn: ['Хөрөнгө үнэлгээ', 'Зах зээлийн судалгаа', 'Гэрээ хэлцэл'],
        featuresEn: ['Asset valuation', 'Market research', 'Deal structuring'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
    ],
  },
  {
    id: 'logistics',
    nameMn: 'Тээвэр, логистик',
    nameEn: 'Transport \u0026 Logistics',
    summaryMn: 'Газрын тос, барилгын материал, ерөнхий ачаа тээвэр.',
    summaryEn: 'Petroleum, construction material, and freight transport.',
    cardDescMn: 'Газрын тос, барилгын материал болон ерөнхий ачаа тээвэрлэлтийн цогц үйлчилгээг хариуцан ажилладаг.',
    cardDescEn: 'Providing integrated petroleum, construction material, and general freight transport services.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200\u0026q=80',
    projects: [
      {
        id: 'ub-logistics-fleet',
        titleMn: 'UB Logistics парк',
        titleEn: 'UB Logistics Fleet',
        summaryMn: 'Орчин үеийн тээврийн хэрэгслээр тоноглогдсон парк.',
        summaryEn: 'A fleet equipped with modern transport vehicles.',
        detailMn: 'UB Logistics парк нь стандартын шаардлага хангасан чиргүүл, ачааны машин, газрын тосны тээврийн хэрэгслээр тоноглогдсон.',
        detailEn: 'UB Logistics Fleet includes standard-compliant trailers, trucks, and petroleum tankers.',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2015–2028',
        timelineEn: '2015–2028',
        featuresMn: ['100+ тээврийн хэрэгсэл', 'GPS хяналт', '24/7 үйлчилгээ'],
        featuresEn: ['100+ vehicles', 'GPS tracking', '24/7 service'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'petroleum-transport',
        titleMn: 'Газрын тосны тээвэр',
        titleEn: 'Petroleum Transport',
        summaryMn: 'Аюулгүй, стандартын дагуу газрын тос тээвэрлэлт.',
        summaryEn: 'Safe petroleum transport according to standards.',
        detailMn: 'Бид аюулгүй байдлыг эрхэмлэн, олон улсын стандартад нийцсэн тусгай зориулалтын автоцистернаар газрын тос бүтээгдэхүүн тээвэрлэдэг.',
        detailEn: 'We prioritize safety, transporting petroleum products in dedicated tankers that meet international standards.',
        image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар, Дархан',
        locationEn: 'Ulaanbaatar, Darkhan',
        timelineMn: '2017–2028',
        timelineEn: '2017–2028',
        featuresMn: ['Тусгай зориулалтын автоцистерн', 'Аюулгүй байдлын хяналт', 'Хурдан хүргэлт'],
        featuresEn: ['Dedicated tankers', 'Safety monitoring', 'Fast delivery'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
    ],
  },
  {
    id: 'lifestyle',
    nameMn: 'Лайфстайл, үйлчилгээ',
    nameEn: 'Lifestyle \u0026 Services',
    summaryMn: 'Хүнсний дэлгүүр, кофе шоп, амралт, спорт, соёл.',
    summaryEn: 'Food retail, cafés, recreation, sports, and culture.',
    cardDescMn: 'Хүнсний дэлгүүр, кофе шоп, амралтын газар, спорт болон соёлын үйлчилгээг хөгжүүлж байна.',
    cardDescEn: 'Developing food retail, cafés, resorts, sports, and cultural services.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200\u0026q=80',
    projects: [
      {
        id: 'ub-cafe',
        titleMn: 'UB Café сүлжээ',
        titleEn: 'UB Café Chain',
        summaryMn: 'Монголд өргөжүүлж буй орчин үеийн кофе шоп сүлжээ.',
        summaryEn: 'A modern coffee shop chain expanding across Mongolia.',
        detailMn: 'UB Café нь чанартай кофе, амтат хоол, цэвэр орчинтой, хурдан үйлчилгээтэй орчин үеийн кофе шоп сүлжээ юм.',
        detailEn: 'UB Café is a modern coffee shop chain offering quality coffee, fresh food, and fast service in a clean environment.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2020–2027',
        timelineEn: '2020–2027',
        featuresMn: ['10+ салбар', 'Өдөр бүр шинэхэн бүтээгдэхүүн', 'Уух зүйлс болон хоол'],
        featuresEn: ['10+ branches', 'Fresh daily products', 'Drinks and food'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'resort',
        titleMn: 'Амралтын газар',
        titleEn: 'Resort \u0026 Recreation',
        summaryMn: 'Байгальд ойр, эрүүл амьдралд зориулсан амралтын газар.',
        summaryEn: 'A nature-close resort for healthy living.',
        detailMn: 'Тэрэлжийн байгальд ойрхон энэхүү амралтын газар нь гэр бүл, найз нөхөд, корпоратив арга хэмжээнд тохиромжтой.',
        detailEn: 'Located near Terelj nature, this resort is ideal for families, friends, and corporate events.',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800\u0026q=80',
        ],
        locationMn: 'Тэрэлж',
        locationEn: 'Terelj',
        timelineMn: '2019–2026',
        timelineEn: '2019–2026',
        featuresMn: ['Байгалийн үзэмж', 'Гэр болон байшин', 'Спортын талбай'],
        featuresEn: ['Nature views', 'Ger and cottages', 'Sports grounds'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
    ],
  },
  {
    id: 'management',
    nameMn: 'Менежмент',
    nameEn: 'Management',
    summaryMn: 'Барилга, үл хөдлөх хөрөнгийн менежмент, үйлчилгээ.',
    summaryEn: 'Property and real estate management services.',
    cardDescMn: 'Барилга, үл хөдлөх хөрөнгийн менежмент, түрээс болон үйлчилгээний чиглэлээр мэргэшсэн.',
    cardDescEn: 'Specialized in property, real estate management, leasing, and facility services.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200\u0026q=80',
    projects: [
      {
        id: 'property-management',
        titleMn: 'UB Properties менежмент',
        titleEn: 'UB Properties Management',
        summaryMn: 'Үл хөдлөх хөрөнгийн түрээс, засвар үйлчилгээ.',
        summaryEn: 'Real estate leasing and maintenance.',
        detailMn: 'Бид барилга, үл хөдлөх хөрөнгийн түрээс, ашиглалт, засвар үйлчилгээ, аюулгүй байдлыг бүрэн хариуцан ажилладаг.',
        detailEn: 'We fully manage building and real estate leasing, operations, maintenance, and security.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2016–2028',
        timelineEn: '2016–2028',
        featuresMn: ['Түрээсийн менежмент', '24/7 аюулгүй байдал', 'Засвар үйлчилгээ'],
        featuresEn: ['Leasing management', '24/7 security', 'Maintenance'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
      {
        id: 'office-services',
        titleMn: 'Төв оффисын үйлчилгээ',
        titleEn: 'Central Office Services',
        summaryMn: 'Оффисын цэвэрлэгээ, харуул хамгаалалт, техникийн дэмжлэг.',
        summaryEn: 'Office cleaning, security, and technical support.',
        detailMn: 'Төв оффисуудад цэвэрлэгээ, харуул хамгаалалт, техникийн засвар, хүлээн авах үйлчилгээ зэрэг цогц менежментийг хүргэдэг.',
        detailEn: 'We deliver integrated management for central offices including cleaning, security, technical repairs, and reception.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800\u0026q=80',
        gallery: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800\u0026q=80',
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800\u0026q=80',
        ],
        locationMn: 'Улаанбаатар',
        locationEn: 'Ulaanbaatar',
        timelineMn: '2018– ongoing',
        timelineEn: '2018– ongoing',
        featuresMn: ['Цэвэрлэгээ', 'Харуул хамгаалалт', 'Техникийн засвар'],
        featuresEn: ['Cleaning', 'Security', 'Technical repairs'],
        mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600\u0026q=80',
      },
    ],
  },
];

export function getSectorById(id: string): Sector | undefined {
  return sectors.find((s) => s.id === id);
}
