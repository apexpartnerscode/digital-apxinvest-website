import Hero from '@/components/Hero'
import { PageDocument, PageQuery } from '@/generated/graphql'
import { client } from '@/lib/urql'
import { GetStaticProps } from 'next'
import { Manrope } from 'next/font/google'
import Head from 'next/head'

const manrope = Manrope({ subsets: ['latin'] })

interface IProfessorLogo {
  url: string;
  width: number;
  height: number;
}

type PageProps = {
  professorName: string;
  professorLogo: IProfessorLogo;
  activeProfessor: boolean;
  professorId: number | undefined
}

export default function Professor({ professorName, professorLogo, activeProfessor, professorId }: PageProps) {
  return (
    <>
      <Head>
        <title>APX Invest BTG, PLATAFORMA CUSTO ZERO E O MELHOR ATENDIMENTO TRADER DO BRASIL</title>
      </Head>
      <div className={manrope.className}>
        {
          activeProfessor && professorLogo ? (
            <Hero
              professorName={professorName}
              professorLogo={professorLogo.url}
              professorLogoHeight={professorLogo.height}
              professorLogoWidth={professorLogo.width}
            />
          ) : activeProfessor ? (
            <Hero 
              professorName={professorName}
            />
          ) : (
            <Hero />
          )
        }
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      "/professor/elitetrader",
      "/professor/traderdegarem",
      "/professor/operacionalrs",
      "/professor/wmtrader",
      "/professor/paniconab3",
      "/professor/pracimatraders",
      "/professor/ricardomartins",
      "/professor/proonetraders",
      "/professor/acostatrader",
      "/professor/brenotk",
      "/professor/aresinvest",
      "/professor/geracaoinvestidora",
      "/professor/triade_trader",
      "/professor/alem_do_trader",
      "/professor/otradercristao",
      "/professor/kennedy_santos",
      "/professor/vgp_trades",
      "/professor/flaviodornelas",
      "/professor/gustavo_dantas",
      "/professor/lucas_muller",
      "/professor/rei_dos_padroes",
      "/professor/henrique_rodrigues",
      "/professor/valter_brasil",
      "/professor/alisson_garcia_trade",
      "/professor/bless_trader",
      "/professor/felipe_ferrari",
      "/professor/jaque_trader",
      "/professor/karin_krug",
      "/professor/maikoalvarenga",
      "/professor/trade_gain",
      "/professor/adonai_trader",
      "/professor/forte_trader",
      "/professor/trade_arena",
      "/professor/tb3l",
      "/professor/x_solutions_price_action",
      "/professor/carteira_de_valor",
      "/professor/wealth_coach",
      "/professor/plataforma_trade_arena"
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const { data } = await client.query<PageQuery>(PageDocument, { slug }).toPromise()
  return {
    props: {
      professorName: data?.page?.title,
      professorLogo: data?.page?.professorLogo,
      activeProfessor: data?.page?.active,
      professorId: data?.page?.professorId
    },
    revalidate: 60 * 60 * 24 * 5
  }
}