import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CitysContinentsProps {
  banner: string
  cityName: string
  countryName: string
  countryFlag: string
}

export function CitysContinents({ banner, cityName, countryName, countryFlag }: CitysContinentsProps) {
  return (
    <>
      <Box
        w="256px"
        h="279"
        borderRadius={4}
        mx={['auto', null]}
      >
        <Image 
          w="100%"
          h="173"
          borderTopLeftRadius={4}
          borderTopRightRadius={4}
          src={banner}
        />
        <Flex
          w="100%"
          h="102"
          px="5"
          borderX="1px"
          borderBottom="1px"
          borderColor="yellow.500"
          borderBottomRightRadius={4}
          borderBottomLeftRadius={4}
          fontFamily="Barlow"

          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text
              fontWeight="600"
              fontSize="20px"
            >
              {cityName}
            </Text>
            <Text
              fontWeight="500"
              fontSize="16px"
              color="gray.400"
            >
              {countryName}
            </Text>
          </Box>
          <Image 
            w="30px"
            h="30px"
            src={countryFlag}
            borderRadius="50%"
          />
        </Flex>
      </Box>
    </>
  )
}