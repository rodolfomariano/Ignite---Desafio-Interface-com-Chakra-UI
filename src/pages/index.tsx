import { Box, Center, Flex, Image, Link, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination]);
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

export default function Home() {
  const [isLarg] = useMediaQuery("(min-width: 580px)")

  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py="4"
      >
        <Image src="images/Logo.svg" />
      </Box>

      <Box>
        <Image w="100%" src={!isLarg ? "images/BannerSmall.svg" : "images/Banner.svg"} />
      </Box>

      <Box
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <SimpleGrid
          w="100%"
          minChildWidth="160px" spacing="4px"
          py="10"
          px={["2", "2", "100"]}

        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              flexDirection={["row", "column"]}
            >
              <Image src="images/cocktail.svg" mb="4" w={["6", "16", "22"]} />
              <Text fontSize={["12", "16"]}>vida noturna</Text>
            </Flex>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              flexDirection={["row", "column"]}
            >
              <Image src="images/surf.svg" mb="4" w={["6", "16", "22"]} />
              <Text fontSize={["12", "16"]}>praia</Text>
            </Flex>
          </Box>
          <Box

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              flexDirection={["row", "column"]}
            >
              <Image src="images/building.svg" mb="4" w={["6", "16", "22"]} />
              <Text fontSize={["12", "16"]}>moderno</Text>
            </Flex>
          </Box>
          <Box

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              flexDirection={["row", "column"]}
            >
              <Image src="images/museum.svg" mb="4" w={["6", "16", "22"]} />
              <Text fontSize={["12", "16"]}>clássico</Text>
            </Flex>
          </Box>
          <Box

            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              flexDirection={["row", "column"]}
            >
              <Image src="images/earth.svg" mb="4" w={["6", "16", "22"]} />
              <Text fontSize={["12", "16"]}>e mais...</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      <Center
        py="50"
        d="flex"
        flexDirection="column"
        fontWeight="500"
        fontSize="24"
      >
        <Text>
          Vamos nessa?
        </Text>

        <Text>
          Então escolha seu continente
        </Text>

      </Center>

      <Box
        w="90%"
        mx="auto"
        display=""
        mb="50"
      >

        <Swiper
          // spaceBetween={50}
          // slidesPerView={1}
          height={450}
          navigation
          pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Center
              bgImage="url('images/europa.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/europe"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">Europa</Text>
                <Text>O continente mais antigo.</Text>
              </Link>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <Center
              bgImage="url('images/oceania.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/oceania"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">Oceania</Text>
                <Text>Maravilhas naturais.</Text>
              </Link>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <Center
              bgImage="url('images/africa.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/africa"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">Africa</Text>
                <Text>O berço da humanidade.</Text>
              </Link>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <Center
              bgImage="url('images/asia.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/asia"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">Asia</Text>
                <Text>O continente mais antigo.</Text>
              </Link>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <Center
              bgImage="url('images/norte.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/northAmerica"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">América do norte</Text>
                <Text>O continente mais antigo.</Text>
              </Link>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <Center
              bgImage="url('images/sul.jpg')"
              h="450"
              flexDirection="column"
              alignItems="center"
              color="gray.50"
            >
              <Link
                href="/continents/southAmerica"
                display="flex"
                flexDirection="column"
                alignItems="center"

              >
                <Text as="h2" fontSize="32" fontWeight="700">América do sul</Text>
                <Text>O continente mais antigo.</Text>
              </Link>
            </Center>
          </SwiperSlide>


        </Swiper>
      </Box>

    </>
  )
}
