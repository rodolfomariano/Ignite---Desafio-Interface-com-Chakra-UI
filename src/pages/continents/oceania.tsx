import { Box, Center, SimpleGrid, Text } from "@chakra-ui/layout";
import { BannerContinents } from "../../components/BannerContinents";
import { HeaderContinents } from "../../components/HeaderContinents";
import { StatisticContinents } from "../../components/StatisticContinents";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { StatisticContinentsWithIcon } from "../../components/StatisticContinentsWithIcon";
import { CitysContinents } from "../../components/CitysContinents";

export default function Oceania() {
  return (
    <>
      <HeaderContinents />
      <BannerContinents
        bannerImage="../images/oceania.jpg"
        bannerTitle="Oceania"
        titleColor="green.800"
      />

      <SimpleGrid
        maxW={1180}
        mx="auto"
        column={[1, 2]}
        spacing={10}
        py="20"
        px="2"
        display={["column", "column", "flex"]}

      >
        <Center maxW="600" mx="auto">
          <Text>
            Os países da Oceania compõem o menor continente do mundo, a Oceania. Juntos, abrangem uma área de, aproximadamente, 8,9 milhões de km2. Esse continente é constituído por grupos de ilhas, e a sua maior porção de terra é a Austrália. O menor país da Oceania é Nauru, com apenas 20 km2.
            Conhecidos também como Novíssimo Mundo, devido ao seu “descobrimento” ter ocorrido após a chegada dos europeus na América, chamada de Novo Mundo, os países da Oceania atraem milhares de turistas pelas suas deslumbrantes paisagens naturais. Esses países estão situados entre os oceanos Pacífico e Índico.
          </Text>
        </Center>
        <Center
          axW="500"
          width="100%"
          minH="50"
          justifyContent="space-around"
          py="8"
        >
          <StatisticContinents
            number={14}
            title="Paises"
          />
          <StatisticContinents
            number={18}
            title="Linguas"
          />
          <StatisticContinentsWithIcon
            number={27}
            title="Cidades +100"
            infoTitle="Cidades top 100"
            infoBody={['Sydney', 'Auckland']}
            icon={InfoOutlineIcon}
          />

        </Center>
      </SimpleGrid>

      <Box
        maxW={1180}
        width="100%"
        mx="auto"
        px="2"
        py="10"
      >
        <Text
          fontSize="26"
          fontWeight="500"
          mb="10"
        >
          Cidades +100
        </Text>

        <SimpleGrid
          spacing={10}
          minChildWidth="256px"
        >
          <CitysContinents
            banner="../../images/oceania/sydney.jpg"
            cityName="Sydney"
            countryName="Australia"
            countryFlag="../../images/oceania/australia.png"
          />

          <CitysContinents
            banner="../../images/oceania/auckland.jpg"
            cityName="Auckand"
            countryName="Nova Zelandia"
            countryFlag="../../images/oceania/australia.png"
          />

        </SimpleGrid>

      </Box>
    </>
  )
}