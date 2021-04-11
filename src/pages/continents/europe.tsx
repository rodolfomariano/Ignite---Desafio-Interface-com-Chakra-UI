import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/layout";
import { BannerContinents } from "../../components/BannerContinents";
import { CitysContinents } from "../../components/CitysContinents";
import { HeaderContinents } from "../../components/HeaderContinents";
import { StatisticContinents } from "../../components/StatisticContinents";
import { StatisticContinentsWithIcon } from "../../components/StatisticContinentsWithIcon";

export default function Europe() {
  return (
    <>
      <HeaderContinents />
      <BannerContinents
        bannerImage="../images/europa.jpg"
        bannerTitle="Europa"
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
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
            number={50}
            title="Paises"
          />
          <StatisticContinents
            number={60}
            title="Linguas"
          />
          <StatisticContinentsWithIcon
            number={27}
            title="Cidades +100"
            infoTitle="Cidades top 100"
            infoBody={['Londres', 'Paris', 'Roma', 'Praga', 'Amsterda']}
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
            banner="../../images/europe/londres.svg"
            cityName="Londres"
            countryName="Reino Unido"
            countryFlag="../../images/europe/england.png"
          />

          <CitysContinents
            banner="../../images/europe/paris.svg"
            cityName="Paris"
            countryName="França"
            countryFlag="../../images/europe/france.png"
          />

          <CitysContinents
            banner="../../images/europe/roma.svg"
            cityName="Roma"
            countryName="Italia"
            countryFlag="../../images/europe/italy.png"
          />

          <CitysContinents
            banner="../../images/europe/praga.svg"
            cityName="Praga"
            countryName="Republica Theca"
            countryFlag="../../images/europe/tcheca.png"
          />

          <CitysContinents
            banner="../../images/europe/amsterda.svg"
            cityName="Amsterda"
            countryName="Holanda"
            countryFlag="../../images/europe/holanda.png"
          />

        </SimpleGrid>

      </Box>
    </>
  )
}