import { Box, Center, Text } from "@chakra-ui/react";

interface StatisticContinentsProps {
  number: number
  title: string
}

export function StatisticContinents({ number, title }: StatisticContinentsProps) {
  return (
    <>
      <Center
        flexDirection="column"
      >
        <Text
          fontSize={[20, 24, 28]}
          fontWeight="600"
          color="yellow.500"
          mb="-2"
        >
          {number}
        </Text>
        <Text>{title}</Text>
      </Center>
    </>
  )
}