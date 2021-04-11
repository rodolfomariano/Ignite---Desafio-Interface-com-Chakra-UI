import {
  Center,
  Flex,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface StatisticContinentsWithIconsProps {
  number: number
  title: string
  infoTitle: string
  infoBody: []
  icon: ElementType
}

export function StatisticContinentsWithIcon({ number, title, icon, infoTitle, infoBody }: StatisticContinentsWithIconsProps) {
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
        <Flex
          alignItems="center"
        >
          <Text mr="2">{title}</Text>
          <Popover>
            <PopoverTrigger>
              <Icon as={icon} fontSize={16} color="gray.400" cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>{infoTitle}</PopoverHeader>
              <PopoverBody>{infoBody.map(city => {
                return <Text>{city}</Text>
              })}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Center>
    </>
  )
}