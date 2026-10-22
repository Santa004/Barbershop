/**
 * StonePower-maskiner. Värden markerade {SPEC – kompletteras} fylls i
 * från tillverkarens datablad.
 *
 * Bilder: public/bilder/maskiner/<slug>-1.jpg, -2.jpg, -3.jpg
 * (bild 1 används även på startsidans kort).
 */

export const SPEC_TBD = "{SPEC – kompletteras}";

export type SpecRow = { label: string; value: string; unit?: string };
export type SpecGroup = { title: string; rows: SpecRow[] };

export type Machine = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  title: string;
  description: string;
  specs: SpecGroup[];
  equipment: string[];
};

const T = SPEC_TBD;

export const MACHINES: Machine[] = [
  {
    slug: "stone-spider",
    name: "Stone Spider",
    summary: "14 500 kg · Cummins B6.7 Stage V, 175 kW · hål 45–89 mm",
    intro:
      "Bandgående borrigg med vridbar överdel för hål 45–89 mm. Stage V-motor från Cummins och hydraulik byggd för långa skift i ovänlig terräng.",
    title: "Stone Spider – teknisk data",
    description:
      "Teknisk data för StonePower Stone Spider: 14 500 kg, Cummins B6.7 Stage V 175 kW, hålstorlek 45–89 mm. Såld och servad av MP Entreprenad i Borås.",
    specs: [
      {
        title: "Allmänt",
        rows: [
          { label: "Driftvikt", value: "14 500", unit: "kg" },
          { label: "Hålstorlek", value: "45–89", unit: "mm" },
          { label: "Transportlängd", value: T, unit: "m" },
          { label: "Transportbredd", value: T, unit: "m" },
          { label: "Transporthöjd", value: T, unit: "m" },
        ],
      },
      {
        title: "Motor",
        rows: [
          { label: "Motor", value: "Cummins B6.7, Stage V" },
          { label: "Effekt", value: "175", unit: "kW" },
          { label: "Bränsletank", value: T, unit: "l" },
          { label: "Kylkapacitet, omgivning", value: T, unit: "°C" },
        ],
      },
      {
        title: "Bärarenhet",
        rows: [
          { label: "Maxhastighet", value: T, unit: "km/h" },
          { label: "Dragkraft", value: T, unit: "kN" },
          { label: "Markfrigång", value: T, unit: "mm" },
          { label: "Lutningsförmåga", value: T, unit: "°" },
        ],
      },
      {
        title: "Bom och matare",
        rows: [
          { label: "Räckvidd framåt", value: T, unit: "m" },
          { label: "Täckningsyta", value: T, unit: "m²" },
          { label: "Matarlängd", value: T, unit: "mm" },
          { label: "Borrstångslängd", value: T, unit: "mm" },
        ],
      },
      {
        title: "Borrmaskin och kompressor",
        rows: [
          { label: "Bergborrmaskin", value: T },
          { label: "Slagkraft", value: T, unit: "kW" },
          { label: "Kompressor, luftflöde", value: T, unit: "l/s" },
          { label: "Kompressor, arbetstryck", value: T, unit: "bar" },
        ],
      },
    ],
    equipment: [T],
  },
  {
    slug: "stone-scorpion",
    name: "Stone Scorpion",
    summary: "Teknisk data och utrustningslista",
    intro: "Kompakt borrigg från StonePower. Fullständig teknisk data och utrustningslista kompletteras.",
    title: "Stone Scorpion – teknisk data",
    description:
      "Teknisk data och utrustningslista för StonePower Stone Scorpion. MP Entreprenad är ensamåterförsäljare i Sverige.",
    specs: templateSpecs(),
    equipment: [T],
  },
  {
    slug: "stone-termite",
    name: "Stone Termite",
    summary: "Teknisk data och utrustningslista",
    intro: "Liten och smidig borrigg från StonePower. Fullständig teknisk data och utrustningslista kompletteras.",
    title: "Stone Termite – teknisk data",
    description:
      "Teknisk data och utrustningslista för StonePower Stone Termite. MP Entreprenad är ensamåterförsäljare i Sverige.",
    specs: templateSpecs(),
    equipment: [T],
  },
  {
    slug: "drill-och-split-s150",
    name: "Drill & Split S150",
    summary: "Splitstone-broschyr, tyst bergspräckning",
    intro:
      "Borrning och spräckning i samma maskin. Hydraulisk bergspräckning utan sprängämnen – tyst och vibrationsfattig, för arbeten nära bebyggelse.",
    title: "Drill & Split S150 – teknisk data",
    description:
      "Teknisk data för Drill & Split S150 med Splitstone – tyst hydraulisk bergspräckning utan sprängämnen. Såld och servad av MP Entreprenad i Borås.",
    specs: templateSpecs(),
    equipment: [T],
  },
];

function templateSpecs(): SpecGroup[] {
  return [
    {
      title: "Allmänt",
      rows: [
        { label: "Driftvikt", value: T, unit: "kg" },
        { label: "Hålstorlek", value: T, unit: "mm" },
        { label: "Transportmått (L × B × H)", value: T, unit: "m" },
      ],
    },
    {
      title: "Motor",
      rows: [
        { label: "Motor", value: T },
        { label: "Effekt", value: T, unit: "kW" },
        { label: "Bränsletank", value: T, unit: "l" },
      ],
    },
    {
      title: "Bärarenhet och bom",
      rows: [
        { label: "Maxhastighet", value: T, unit: "km/h" },
        { label: "Räckvidd framåt", value: T, unit: "m" },
        { label: "Täckningsyta", value: T, unit: "m²" },
      ],
    },
    {
      title: "Borrutrustning",
      rows: [
        { label: "Bergborrmaskin", value: T },
        { label: "Matarlängd", value: T, unit: "mm" },
        { label: "Kompressor, luftflöde", value: T, unit: "l/s" },
      ],
    },
  ];
}

export function getMachine(slug: string): Machine | undefined {
  return MACHINES.find((m) => m.slug === slug);
}
