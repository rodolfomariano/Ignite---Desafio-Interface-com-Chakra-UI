import { Box, Text } from "@chakra-ui/react";

interface BannerContinentsProps {
  bannerImage: string
  bannerTitle: string
  titleColor?: string
}

export function BannerContinents({ bannerImage, bannerTitle, titleColor = "gray.50" }: BannerContinentsProps) {
  return (
    <>
      <Box
      // "url('../images/europa.jpg')" 
      //   bgImage={bannerImage}
        bgImage={`url(${bannerImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="500"

      >
        <Box
          position="relative"
          maxW={1180}
          h="100%"
          mx="auto"
        >
          <Text
            position="absolute"
            bottom="10"
            left="2"
            fontSize="38"
            fontWeight="600"
            color={titleColor}
          >
            {bannerTitle}
          </Text>

        </Box>
      </Box>
    </>
  )
}