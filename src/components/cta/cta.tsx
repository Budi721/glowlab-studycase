import { Box, Flex, Heading, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { MdPermPhoneMsg } from 'react-icons/md'

export const CallToAction = () => {
  return (
    <Box as="section">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} py="12">
        <Flex align="center" justify="center" direction={{ base: 'column-reverse', md: 'row' }}>
          <Box flex="1" maxW="440px">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color={useColorModeValue('blue.600', 'blue.300')}
            >
              Peptide Moist 5K+ Sold Out
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              color={useColorModeValue('gray.600', 'inherit')}
              mt="6"
            >
              Pelembab untuk semua jenis kulit, termasuk kulit berjerawat dan kulit sensitif.
            </Text>

            <Stack mt={{ base: '8', md: '16' }} spacing="4" fontWeight="extrabold">
              <HStack spacing="5" color={useColorModeValue('brand.300', 'blue.300')}>
                <Box fontSize="3xl" as={MdPermPhoneMsg} />
                <Text fontSize={{ base: 'xl', md: '2xl' }}>0858 1365 1324</Text>
              </HStack>

            </Stack>
          </Box>

          <Box aria-hidden className="spacer" flexShrink={0} boxSize={{ base: '10', xl: '20' }} />

          <Box flex="1" maxW="560px" h={{ base: '400px', md: '460px' }}>
            <Img
              alt="Call center"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="right"
              src="https://images.unsplash.com/photo-1654512697945-9936dc2ca5b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
