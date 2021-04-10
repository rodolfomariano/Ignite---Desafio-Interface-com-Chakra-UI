import { Center, Image, Link } from "@chakra-ui/react";

import { ChevronLeftIcon } from "@chakra-ui/icons"

export function HeaderContinents() {
  return (
    <>

      <Center
        position="relative"
        maxW={1180}
        as="header"
        py="4"
        px="1"
        mx="auto"
      >
        <Link 
          position="absolute"
          left="0"
          href="/"
        >
          <ChevronLeftIcon fontSize="32" />
        </Link>
        <Image src="../../images/Logo.svg" />
      </Center>

    </>
  )
}